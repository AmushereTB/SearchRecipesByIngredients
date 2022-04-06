import React from 'react';
import {Props} from "../../Interfaces";
import './Recipe.css'
import {Link} from "react-router-dom";

const Recipe = ({item} : Props) => {
    const { idMeal, strMeal, strMealThumb} = item
    return (
        <article className="recipe">
            <img src={strMealThumb} alt={strMeal} />
            <div className="recipe-footer">
                <h3>{strMeal}</h3>
                <Link to={`/recipe/${idMeal}`} className="btn btn-primary btn-detail" >
                    detail
                </Link>
            </div>
        </article>
    );
};

export default Recipe;
