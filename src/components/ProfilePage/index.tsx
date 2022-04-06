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
        const response = await fetch(`https://localhost:7137/api/Users/${loginInfo?.googleId}`);
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

    return (
        <div>
            <h1 className="section-title">Welcome, {loginInfo?.name}</h1>
            <FavoriteRecipesBoard items={favoriteList} />
        </div>
    );
};

export default ProfilePage;
