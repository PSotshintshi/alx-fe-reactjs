import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favoriteRecipes = favorites
    .map(id => recipes.find(r => r.id === id))
    .filter(Boolean); // filter out undefined

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      )) : <p>No favorites yet.</p>}
    </div>
  );
};

export default FavoritesList;
