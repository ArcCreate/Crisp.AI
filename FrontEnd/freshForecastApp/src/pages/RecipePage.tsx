// src/components/RecipePage.tsx
import React from 'react';
import Recipe from '../components/Recipe';

const recipesData = [
    {
      fruitIndex: 0,
      qualityIndex: 1,
      imageId: '1111',
      recipeName: 'Apple Delight',
      recipeInstructions: 'Crush graham crackers into fine crumbs using a food processor or by hand. Melt 8 tablespoons butter and mix it with graham cracker crumbs, 2 tablespoons granulated sugar, and 1/4 teaspoon kosher salt. Press the graham cracker mixture into the bottom of an 8x8-inch baking dish to form a crust. In a large mixing bowl, beat together 8 ounces cream cheese, 1/4 cup powdered sugar, and 1 teaspoon vanilla extract until smooth. In a separate bowl, whip 1 1/2 cups cold heavy cream with the remaining 1/4 cup powdered sugar until stiff peaks form. Gently fold the whipped cream into the cream cheese mixture until well combined. Spread the cream cheese and whipped cream mixture evenly over the graham cracker crust. Spread 1 (about 21-ounce) can apple pie filling over the cream layer. Optional: Sprinkle 1/4 cup chopped pecans and crumbled 1.4-ounce chocolate-covered English toffee bar on top. Drizzle 2 tablespoons caramel sauce over the apple pie filling. Refrigerate the dessert for at least 2 hours before serving to allow it to set.',
      recipeIngredients: '8 ounces cream cheese, 8 tablespoons (1 stick) unsalted butter, 12 whole graham crackers sheets (about 6 1/2 ounces), or 1 1/2 cups graham cracker crumbs, 2 tablespoons granulated sugar, 1/2 teaspoon kosher salt, divided, 1/2 cup powdered sugar, divided, 1 teaspoon vanilla extract, 1 1/2 cups cold heavy cream, 1 (about 21-ounce) can apple pie filling, 1/4 cup pecans (optional), 1 (1.4-ounce) chocolate-covered English toffee bar, such as Heath (optional), 2 tablespoons caramel sauce',
    },
    {
      fruitIndex: 0,
      qualityIndex: 2,
      imageId: '1112',
      recipeName: 'Classic Double-Crust Apple Pie',
      recipeInstructions: 'Make the filling: Place 1/2 cup packed brown sugar, 1/2 cup granulated sugar, 2 teaspoons ground cinnamon, 3/4 teaspoon kosher salt, 1/2 teaspoon ground ginger, and 1/4 teaspoon ground nutmeg in a large bowl. Stir to combine, breaking up any clumps of sugar. Peel 3 pounds Granny Smith or Honeycrisp apples. Halve and core the apples, then cut into 1/4-inch-thick slices (about 8 cups). Add to the bowl of spiced sugar and toss to combine, making sure there are no clumps of sugar or spices left in the bottom of the bowl. Let sit at room temperature to soften until it releases about 3/4 cup liquid, about 30 minutes. Roll out 1/2 of the pie dough on a floured surface into a circle and place in the bottom of a pie dish. Add the apple mixture to the pie crust, then cover with the top crust, sealing the edges. Cut slits in the top crust to allow steam to escape. Bake in a preheated oven at 425°F for 15 minutes, then reduce the temperature to 350°F and bake for an additional 35-45 minutes until the apples are tender and the crust is golden brown.',
      recipeIngredients: 'For the filling: 1/2 cup packed light or dark brown sugar, 1/2 cup granulated sugar, 2 teaspoons ground cinnamon, 3/4 teaspoon kosher salt, 1/2 teaspoon ground ginger, 1/4 teaspoon ground nutmeg, 3 pounds Granny Smith or Honeycrisp apples (about 7 large), or a combination, 1/3 cup all-purpose flour. For assembly and serving: 1 recipe flaky pie dough, formed into 2 disks and chilled, all-purpose flour for dusting, 1 large egg yolk, 1 tablespoon water, 1 tablespoon turbinado or coarse sugar (optional), whipped cream or vanilla ice cream for serving.',
    },
    {
      fruitIndex: 0,
      qualityIndex: 3,
      imageId: '1113',
      recipeName: 'Glazed Apple Fritters',
      recipeInstructions: 'Prep the apples. Core, peel, and chop the apples into small pieces. Submerge them in ice-cold water with 2 teaspoons of lemon juice to prevent them from browning. In a large mixing bowl, combine 2 1/2 pounds of chopped apples with 3 tablespoons unsalted butter, 2 teaspoons ground cinnamon, and 1/4 cup granulated sugar. In a separate bowl, whisk together 1 packet of active dry yeast (2 1/4 teaspoons) with 3 1/4 cups of unbleached all-purpose flour, 1/3 cup granulated sugar, 1 teaspoon salt, and 1 teaspoon ground cinnamon. In another bowl, mix 1/2 cup whole milk (warmed to about 110°F), 2 large eggs (lightly beaten), and 1/3 cup unsalted butter (melted). Add the milk mixture to the flour mixture and stir until just combined. Fold in the prepared apple mixture. Heat vegetable oil in a deep fryer or large pot. Drop spoonfuls of the batter into the hot oil and fry until golden brown, about 3-4 minutes on each side. Drain on paper towels and let cool slightly before glazing. For the glaze, whisk together 1 1/2 cups powdered sugar, 3 to 4 tablespoons milk, and 1 teaspoon vanilla extract until smooth. Drizzle over the fritters and serve warm.',
      recipeIngredients: 'For the apple filling: 2 1/2 pounds Granny Smith apples (about 5), 2 teaspoons freshly squeezed lemon juice, 3 tablespoons unsalted butter, 2 teaspoons ground cinnamon, 1/4 cup granulated sugar, 1/4 cup apple cider vinegar. For the dough: 1 packet active dry yeast (2 1/4 teaspoons), 3 1/4 cups unbleached all-purpose flour, divided, 1/3 cup granulated sugar, 1 teaspoon salt, 1 teaspoon ground cinnamon, 1/2 cup whole milk, 2 large eggs (lightly beaten), 1/3 cup unsalted butter (at room temperature), vegetable oil (for frying). For the glaze: 1 1/2 cups powdered sugar, 3 to 4 tablespoons milk, 1 teaspoon vanilla extract.',
    },
    {
      fruitIndex: 1,
      qualityIndex: 1,
      imageId: '2221',
      recipeName: 'Banana Split Brownies',
      recipeInstructions: 'Preheat oven to 350°F. In a microwave, melt 8 ounces unsweetened chocolate and 3/4 cup butter in a large bowl; stir until smooth. In a separate bowl, beat 3 large eggs and 2 cups sugar on high speed for 10 minutes. Stir in the melted chocolate mixture and 1 teaspoon vanilla extract. Gradually stir in 1 cup plus 2 tablespoons all-purpose flour. Fold in 1 cup chopped maraschino cherries. Pour the batter into a greased 9x13-inch baking dish and bake for 25-30 minutes until a toothpick inserted into the center comes out clean. For the topping: In a bowl, mix 8 ounces cream cheese (softened), 1/2 cup mashed ripe banana (about 1 medium), 1/3 cup strawberry preserves, and 1 large egg (lightly beaten) until smooth. Spread the topping over the brownies and sprinkle with 1/4 cup chopped salted peanuts. Optional: garnish with sliced bananas and additional chopped maraschino cherries before serving.',
      recipeIngredients: '8 ounces unsweetened chocolate (chopped), 3/4 cup butter (cubed), 3 large eggs (room temperature), 2 cups sugar, 1 teaspoon vanilla extract, 1 cup plus 2 tablespoons all-purpose flour, 1 cup maraschino cherries (chopped). For the topping: 1 package (8 ounces) cream cheese (softened), 1/2 cup mashed ripe banana (about 1 medium), 1/3 cup strawberry preserves, 1 large egg (lightly beaten), 1/4 cup chopped salted peanuts. Optional: sliced bananas and additional chopped maraschino cherries.',
    },
    {
      fruitIndex: 1,
      qualityIndex: 2,
      imageId: '2222',
      recipeName: 'Banana Oatmeal Cookies',
      recipeInstructions: 'Preheat oven to 375°F. In a bowl, combine 1 1/2 cups all-purpose flour, 1 cup sugar, 1 teaspoon salt, 1/2 teaspoon baking soda, 1/2 teaspoon ground cinnamon, and 1/4 teaspoon ground nutmeg; mix well. Beat in 3/4 cup softened butter until the mixture resembles coarse crumbs. Add 1 large egg (room temperature), 1 cup mashed ripe bananas (about 2), and 1 3/4 cups quick-cooking oats; mix well. Stir in 1 cup semisweet chocolate chips and 1/2 cup chopped walnuts. Drop by tablespoonfuls onto greased baking sheets and bake for 10-12 minutes until golden brown.',
      recipeIngredients: '1-1/2 cups all-purpose flour, 1 cup sugar, 1 teaspoon salt, 1/2 teaspoon baking soda, 1/2 teaspoon ground cinnamon, 1/4 teaspoon ground nutmeg, 3/4 cup butter (softened), 1 large egg (room temperature), 1 cup mashed ripe bananas (about 2), 1-3/4 cups quick-cooking oats, 1 cup semisweet chocolate chips, 1/2 cup chopped walnuts.',
    },
    {
      fruitIndex: 1,
      qualityIndex: 3,
      imageId: '2223',
      recipeName: 'Banana Blueberry Pancakes',
      recipeInstructions: 'In a large bowl, combine 1 cup all-purpose flour, 1 tablespoon brown sugar, 1 tablespoon baking powder, and 1/2 teaspoon salt. In a second bowl, whisk together 1 large egg, 1 cup milk, 1 mashed banana, and 1 teaspoon vanilla extract. Pour the wet ingredients into the dry ingredients and stir just until moistened. Heat a non-stick skillet over medium heat and pour 1/4 cup of batter for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve warm with maple syrup.',
      recipeIngredients: 'All-purpose flour, brown sugar, 1 banana, canola oil (for cooking), confectioners’ sugar (for serving).',
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
