import React from 'react';
import './FavoriteRecipe.css'
import {Link} from "react-router-dom";
import {IRecipes} from "../../Interfaces";

interface Props {
    item: IRecipes,
    onDelete(idMeal: string) : void
}
const Recipe = ({item, onDelete} : Props) => {
    const { idMeal, strMeal, strMealThumb} = item
    return (
        <article className="recipe">
            <img src={strMealThumb} alt={strMeal} />
            <div className="recipe-footer">
                <h3>{strMeal}</h3>
                <div className="button-group">
                    <Link to={`/recipe/${idMeal}`} className="btn btn-primary btn-detail" >
                        detail
                    </Link>
                    <button className="del del-detail del-primary" onClick={() => onDelete(idMeal)}>
                        delete
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Recipe;
