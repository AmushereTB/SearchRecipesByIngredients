import React, {useEffect, useState} from 'react';
import {ILoginData, IRecipes} from "../../Interfaces";
import RecipesBoard from "../RecipesBoard";
import FavoriteRecipesBoard from "../FavoriteRecipesBoard";

interface Props {
    loginInfo: ILoginData | undefined
}

const ProfilePage = ({loginInfo} : Props) => {
    const [favoriteList, setFavoriteList] = useState<IRecipes[]>([]);

    const fetchFavoriteRecipes = async () => {
        const response = await fetch(`https://recipe-backend.azurewebsites.net/api/Users/${loginInfo?.googleId}`);
        const data = await response.json();
        const { recipes } = data;
        if(recipes)
        {
            setFavoriteList(recipes);
        } 
        else
        {
            setFavoriteList([]);
        }
    }
    useEffect(() => {
        fetchFavoriteRecipes();
    },[]);

    const deleteRecipe = async (idMeal: string) : Promise<void> => {
        await fetch(`https://recipe-backend.azurewebsites.net/api/FavoriteRecipes/${idMeal}`, {
            method: 'DELETE'
        });
        await fetchFavoriteRecipes();
    }
    
    return (
        <div>
            <h1 className="section-title">Welcome, {loginInfo?.name}</h1>
            <FavoriteRecipesBoard items={favoriteList} deleteRecipe={deleteRecipe} />
        </div>
    );
};

export default ProfilePage;
