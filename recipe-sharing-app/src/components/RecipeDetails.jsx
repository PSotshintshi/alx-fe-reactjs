  /*import { useRecipeStore } from './recipeStore';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here 
      </div>
    );
  };
  export default RecipeDetails;
  */
 import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
