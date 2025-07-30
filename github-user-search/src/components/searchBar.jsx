// src/components/SearchBar.jsx
export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search GitHub username..."
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSearch(e.target.value);
      }}
    />
  );
}
