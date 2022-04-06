import React from 'react';
import {IRecipes} from "../../Interfaces";
import Recipe from "../Recipe";
import './FavoriteRecipesBoard.css';

interface Props {
    items: IRecipes[]
}

const RecipesBoard = ({ items } : Props) => {
    return (
        <section className="section">
            <h2 className="section-title">Favorite List</h2>
            
            {/*<p>number of Recipes: {items.length}</p>*/}
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
