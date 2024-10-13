// src/components/Recipe.tsx
import React from 'react';
import imageMap from '../imageMap';

interface RecipeProps {
  imageId: string;
  recipeName: string;
  recipeInstructions: string;
  recipeIngredients: string;
}

const Recipe: React.FC<RecipeProps> = ({ imageId, recipeName, recipeInstructions, recipeIngredients }) => {
  const imageSrc = imageMap[imageId];

  return (
    <div className="border rounded-lg shadow-lg p-4 m-4 bg-white">
      <img src={imageSrc} alt={recipeName} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{recipeName}</h2>
      <h3 className="text-lg mt-2">Ingredients:</h3>
      <p>{recipeIngredients}</p>
      <h3 className="text-lg mt-2">Instructions:</h3>
      <p>{recipeInstructions}</p>
    </div>
  );
};

export default Recipe;
