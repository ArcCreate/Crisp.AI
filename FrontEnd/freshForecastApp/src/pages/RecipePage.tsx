// src/components/RecipePage.tsx
import React from 'react';
import Recipe from '../components/Recipe';

const recipesData = [
  {
    fruitIndex: 0,
    qualityIndex: 1,
    imageId: '1111',
    recipeName: 'Apple Delight',
    recipeInstructions: 'Crush graham crackers into fine crumbs using a food processor or by hand...',
    recipeIngredients: '8 ounces cream cheese, 8 tablespoons (1 stick) unsalted butter...',
  },
  {
    fruitIndex: 0,
    qualityIndex: 2,
    imageId: '1112',
    recipeName: 'Classic Double-Crust Apple Pie',
    recipeInstructions: 'Make the filling: Place 1/2 cup packed brown sugar...',
    recipeIngredients: 'For the filling: 1/2 cup packed light or dark brown sugar...',
  },
  {
    fruitIndex: 0,
    qualityIndex: 3,
    imageId: '1113',
    recipeName: 'Glazed Apple Fritters',
    recipeInstructions: 'Prep the apples. Core, peel, and chop the apples...',
    recipeIngredients: 'For the apple filling: 2 1/2 pounds Granny Smith apples...',
  },
  {
    fruitIndex: 1,
    qualityIndex: 1,
    imageId: '2221',
    recipeName: 'Banana Split Brownies',
    recipeInstructions: 'Preheat oven to 350°F. In a microwave, melt chocolate and butter...',
    recipeIngredients: '8 ounces unsweetened chocolate, chopped...',
  },
  {
    fruitIndex: 1,
    qualityIndex: 2,
    imageId: '2222',
    recipeName: 'Banana Oatmeal Cookies',
    recipeInstructions: 'Preheat oven to 375°F. In a bowl, combine the first 6 ingredients...',
    recipeIngredients: '1-1/2 cups all-purpose flour, 1 cup sugar...',
  },
  {
    fruitIndex: 1,
    qualityIndex: 3,
    imageId: '2223',
    recipeName: 'Banana Blueberry Pancakes',
    recipeInstructions: 'In a large bowl, combine the flours, sugar, baking powder and salt...',
    recipeIngredients: 'All-purpose flour, Brown sugar, 1 banana...',
  },
];

const RecipePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {recipesData.map((recipe) => (
        <Recipe
          key={recipe.imageId}
          imageId={recipe.imageId}
          recipeName={recipe.recipeName}
          recipeInstructions={recipe.recipeInstructions}
          recipeIngredients={recipe.recipeIngredients}
        />
      ))}
    </div>
  );
};

export default RecipePage;
