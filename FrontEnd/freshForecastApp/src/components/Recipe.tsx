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

  // Split ingredients and instructions into arrays for mapping
  const ingredientsList = recipeIngredients.split(',').map((ingredient) => ingredient.trim());
  const instructionsList = recipeInstructions.split('.').map((instruction) => instruction.trim()).filter(Boolean);

  return (
    <div className="border rounded-lg shadow-lg p-4 m-4 bg-white cursor-pointer" onClick={toggleExpand}>
      <img src={imageSrc} alt={recipeName} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2 text-center">{recipeName}</h2> {/* Center the title */}
      {isExpanded && (
        <div className="mt-2 transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">Ingredients:</h3>
          <ul className="list-disc ml-5">
            {ingredientsList.map((ingredient, index) => (
              <li key={index} className="mt-1">{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-2">Instructions:</h3>
          <ol className="list-decimal ml-5">
            {instructionsList.map((instruction, index) => (
              <li key={index} className="mt-1">{instruction}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Recipe;
