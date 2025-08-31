import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"; // ✅ Added Link import
import recipesData from "../data.json";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Collection</h1>

      {/* Responsive grid: 1 col mobile, 2 cols small tablets, 3 cols medium, 4 cols large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {recipe.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-gray-500">
                  {recipe.cookingTime} mins
                </span>
                {/* ✅ Link to RecipeDetail page */}
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
