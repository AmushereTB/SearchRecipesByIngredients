import React, {useCallback, useEffect, useState} from 'react';
import RecipesBoard from "../RecipesBoard";
import {IRecipes} from "../../Interfaces";
import SearchForm from "../SearchForm";

function Home() {
    const [recipeList, setRecipeList] = useState<IRecipes[]>([]);
    const [searchTermOne, setSearchTermOne] = useState("");
    const [searchTermTwo, setSearchTermTwo] = useState("");
    const [searchTermThree, setSearchTermThree] = useState("");
    let url = "";
    
    const fetchRecipes = useCallback(async () => {
        if (searchTermOne === "" && searchTermTwo === "" && searchTermThree === ""){
            url = "https://lastprojectapifood.azurewebsites.net/api/Recipes/ingredients";
        }else if (searchTermTwo === "" && searchTermThree === "") {
            url = `https://lastprojectapifood.azurewebsites.net/api/Recipes/ingredients?searchByIngredient=${searchTermOne}`;
        }else if (searchTermThree === ""){
            url = `https://lastprojectapifood.azurewebsites.net/api/Recipes/ingredients?searchByIngredient=${searchTermOne}&searchByIngredient2=${searchTermTwo}`;
        }else{
            url = `https://lastprojectapifood.azurewebsites.net/api/Recipes/ingredients?searchByIngredient=${searchTermOne}&searchByIngredient2=${searchTermTwo}&searchByIngredient3=${searchTermThree}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        const { meals } = data;
        if(meals)
        {
            setRecipeList(meals);
        } else
        {
            setRecipeList([]);
        }
    }, [searchTermOne, searchTermTwo,searchTermThree])

    useEffect(() => {
        fetchRecipes();
    },[searchTermOne, searchTermTwo, searchTermThree, fetchRecipes]);

    return (
        <main>
            <SearchForm setSearchTermOne={setSearchTermOne} setSearchTermTwo={setSearchTermTwo} setSearchTermThree={setSearchTermThree} />
            <RecipesBoard items={recipeList} />
        </main>
    );
}

export default Home;
