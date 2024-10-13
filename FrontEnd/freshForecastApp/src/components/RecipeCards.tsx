import React from 'react';

// Define the prop types for RecipeCards
interface RecipeCardsProps {
    recipes: {
        recipeName: string;
        recipeInstructions: string;
        recipeIngredients: string;
        fruitIndex: number;
        qualityIndex: number;
        imageId: number;
        Fruit_Quality: string;
        Quality_Score: number;
        Ripeness_Score: number;
    }[];
}

const RecipeCards: React.FC<RecipeCardsProps> = ({ recipes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold">{recipe.recipeName}</h2>
                    <p className="text-sm mb-2">Quality: {recipe.Fruit_Quality} (Score: {recipe.Quality_Score})</p>
                    <p><strong>Ingredients:</strong> {recipe.recipeIngredients}</p>
                    <p><strong>Instructions:</strong> {recipe.recipeInstructions}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeCards;
