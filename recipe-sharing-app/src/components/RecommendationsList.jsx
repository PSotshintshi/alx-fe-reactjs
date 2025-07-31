
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold">Recommended for You</h2>
        <button
          onClick={generateRecommendations}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
        >
          Refresh
        </button>
      </div>

      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        <div className="grid gap-4">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="border rounded p-3">
              <h3 className="font-bold text-lg">{recipe.title}</h3>
              <p className="text-sm">{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
