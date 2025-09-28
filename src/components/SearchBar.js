import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 justify-left">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-64 p-2 rounded text-black"
      />
      <button
        type="submit"
        className="bg-white hover:bg-gray-400   text-black font-semibold px-4 rounded"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
