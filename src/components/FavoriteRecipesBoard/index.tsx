import React from 'react';
import {IRecipes} from "../../Interfaces";
import './FavoriteRecipesBoard.css';
import FavoriteRecipe from "../FavoriteRecipe";

interface Props {
    items: IRecipes[]
    deleteRecipe(idMeal: string) : void
}

const RecipesBoard = ({ items, deleteRecipe } : Props) => {
    return (
        <section className="section">
            <h2 className="section-title">Favorite List</h2>
            
            <div className="recipe-list">
                { items.map(item => {
                        return <FavoriteRecipe key={item.idMeal} item={item} onDelete={deleteRecipe} />
                    }
                ) }
            </div>
        </section>
    );
};

export default RecipesBoard;
