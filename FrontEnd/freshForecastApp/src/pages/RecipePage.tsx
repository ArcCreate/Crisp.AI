import React, { useState, useEffect } from 'react';
import RecipeCards from "../components/RecipeCards";
import Papa from 'papaparse';

// Define the shape of a recipe based on your CSV
interface Recipe {
    recipeName: string;
    recipeInstructions: string;
    recipeIngredients: string;
    fruitIndex: number;
    qualityIndex: number;
    imageId: number;
    Fruit_Quality: string;
    Quality_Score: number;
    Ripeness_Score: number;
}

const RecipePage: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        // Fetch the CSV file from the public folder (or any other location)
        fetch("/recipeExample.csv")
            .then(response => response.text())
            .then(csvData => {
                Papa.parse<Recipe>(csvData, {
                    header: true,
                    complete: (result) => {
                        setRecipes(result.data); // Save parsed recipes to state
                    },
                    error: (error: Error) => { // Explicit type for error
                        console.error("Error parsing CSV file:", error);
                    }
                });
            });
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 text-center text-white">
            <h1 className="text-3xl font-bold mb-4">Delicious Recipes</h1>
            <p className="text-lg mb-8">Discover a variety of tasty recipes using fresh ingredients!</p>
            <div className="recipe-cards-container">
                {recipes.length > 0 ? (
                    <RecipeCards recipes={recipes} />
                ) : (
                    <p>Loading recipes...</p>
                )}
            </div>
        </div>
    );
};

export default RecipePage;
