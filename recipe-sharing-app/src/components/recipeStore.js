import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Favorites
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, recipeId])]
    })),

  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Recommendations (basic mock)
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
