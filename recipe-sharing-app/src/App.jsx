import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import React from 'react';
import SearchBar from './components/searchBar';
import RecipeList from './components/RecipeList';

/*const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};
*/
function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Search</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
