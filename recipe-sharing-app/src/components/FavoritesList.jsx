// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean); // guard against missing

  if (favoriteRecipes.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">My Favorites</h2>
        <p>No favorites yet.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Favorites</h2>
      <div className="grid gap-4">
        {favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded p-4 flex flex-col md:flex-row justify-between items-start"
          >
            <div>
              <Link
                to={`/recipes/${recipe.id}`}
                className="text-lg font-bold text-blue-600 hover:underline"
              >
                {recipe.title}
              </Link>
              <p className="mt-1 text-sm">{recipe.description}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <FavoriteButton recipeId={recipe.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
