export interface IRecipes {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface IIngredients {
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient17: string;
    strIngredient20: string;
}

export interface IRecipe {
    name: string;
    category: string;
    location: string;
    instruction: string;
    tags: string;
    image: string;
    youtube: string;
    ingredients: string[];
}

export interface Props {
    item: IRecipes 
}

export interface ILoginData {
    email: string,
    familyName: string,
    givenName: string,
    googleId: string,
    imageUrl: string,
    name: string
}