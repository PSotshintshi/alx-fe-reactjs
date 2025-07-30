 // RecipeList component
  /*import { useRecipeStore } from './components/recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList;*/

import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-4 border rounded">
          <h2 className="text-xl font-semibold">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <Link
            to={`/recipes/${recipe.id}`}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

