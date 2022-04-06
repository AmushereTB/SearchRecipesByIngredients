import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {IIngredients, ILoginData, IRecipe} from "../../Interfaces";
import YoutubeEmbedded from "../YoutubeEmbedded";
import "./RecipeDetail.css"

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<IRecipe>();
    const [readMore, setReadMore] = useState(false);

    const fetchRecipe = async () => {
        const response = await fetch(`https://lastprojectapifood.azurewebsites.net/api/Recipes/${id}`);
        const data = await response.json();
        const { meals } = data;
        if (meals) {
            const {
                strMeal: name,
                strCategory: category,
                strArea: location,
                strInstructions: instruction,
                strTags: tags,
                strMealThumb: image,
                strYoutube: youtube,
            } = meals[0];
            const detail : IIngredients = meals[0];
            const ingredients = [
                detail.strIngredient1,
                detail.strIngredient2,
                detail.strIngredient3,
                detail.strIngredient4,
                detail.strIngredient5,
                detail.strIngredient6,
                detail.strIngredient7,
                detail.strIngredient8,
                detail.strIngredient9,
                detail.strIngredient10,
                detail.strIngredient11,
                detail.strIngredient12,
                detail.strIngredient13,
                detail.strIngredient14,
                detail.strIngredient15,
                detail.strIngredient16,
                detail.strIngredient17,
                detail.strIngredient18,
                detail.strIngredient19,
                detail.strIngredient20,
            ].filter( item => {
                return item !== null && item !== "";
            });
            const newRecipe = {
                name,
                category,
                location,
                instruction,
                tags,
                image,
                youtube,
                ingredients,
            };
            setRecipe(newRecipe);
            // console.log(newRecipe);
        }
    };

    const clickHandler = async (e : any) => {
        e.preventDefault();
        let result : ILoginData = JSON.parse(localStorage.getItem('loginData') || "")

        const response =  await fetch('https://localhost:7137/api/FavoriteRecipes', {
            method: 'POST',
            body: JSON.stringify({
                idMeal: id,
                strMeal: recipe?.name,
                strMealThumb: recipe?.image,
                googleId: result.googleId
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        alert("Recipe has added to favorite!")
        // post recipe
    }
    
    useEffect(() => {
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <h2>No recipe to display</h2>;
    } else {
        const {
            name,
            category,
            location,
            instruction,
            tags,
            image,
            ingredients,
            youtube,
        } = recipe;
        return (
            <section className="recipe-section">
                <button className="btn btn-primary" onClick={ clickHandler }>
                    Add Favorite
                </button>
                <h2 className="section-title">{name}</h2>
                <div className="single-recipe">
                    <img src={image} alt={name} />
                    <div className="single-recipe-info">
                        <p>
                            <span className="display-info">name:</span> {name}
                        </p>
                        <p>
                            <span className="display-info">category:</span> {category}
                        </p>
                        <p>
                            <span className="display-info">country:</span> {location}
                        </p>
                        <p>
                            <span className="display-info">tags:</span> {tags ? tags : "meal"}
                        </p>
                        <p>
                            <span className="display-info">ingredients:</span>
                            {ingredients.map((ingredient, index) => {
                                if (index === ingredients.length - 1) {
                                    return ingredient ? (
                                        <span key={index}> {ingredient}</span>
                                    ) : null;
                                }
                                return ingredient ? (
                                    <span key={index}> {ingredient},</span>
                                ) : null;
                            })}
                        </p>
                        <p>
                            <span className="display-info">instruction:</span>
                            {readMore ? instruction : `${instruction.substring(0, 300)}...`}
                            <button onClick={() => setReadMore(!readMore)}>
                                {readMore ? "show less" : "read more"}
                            </button>
                        </p>
                    </div>
                </div>
                <article>
                    <h2 className="section-title">Instruction</h2>
                    <div className="instruction">
                        <YoutubeEmbedded embedId={youtube.split("?v=")[1]} />
                    </div>
                </article>
            </section>
        );
    }
}
export default RecipeDetail;
