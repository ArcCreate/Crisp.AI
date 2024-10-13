// src/components/Recipe.tsx
import React, { useState } from 'react';
import imageMap from '../imageMap'; // Assuming you have this file with image imports

interface RecipeProps {
  imageId: string;
  recipeName: string;
  recipeInstructions: string;
  recipeIngredients: string;
}

const Recipe: React.FC<RecipeProps> = ({ imageId, recipeName, recipeInstructions, recipeIngredients }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Local state to track expansion
  const imageSrc = imageMap[imageId]; // Get the image source from the map

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 m-4 bg-white cursor-pointer" onClick={toggleExpand}>
      <img src={imageSrc} alt={recipeName} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{recipeName}</h2>
      {isExpanded && (
        <div className="mt-2 transition-all duration-300 ease-in-out">
          <h3 className="text-lg">Ingredients:</h3>
          <p>{recipeIngredients}</p>
          <h3 className="text-lg mt-2">Instructions:</h3>
          <p>{recipeInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
