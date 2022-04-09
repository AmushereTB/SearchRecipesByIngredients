import React from 'react';
import {IRecipes} from "../../Interfaces";
import Recipe from "../Recipe";
import './RecipesBoard.css';

interface Props {
    items: IRecipes[]
}

const RecipesBoard = ({ items } : Props) => {
    return (
        <section className="section">
            <h2 className="section-title">Recipes</h2>
            
            <div className="recipe-list">
                { items.map(item => {
                        return <Recipe key={item.idMeal} item={item} />
                    }
                ) }
            </div>
        </section>
    );
};

export default RecipesBoard;
