import { useState } from 'react'
import SearchBar from './components/searchBar'
import Search from './components/search'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;


