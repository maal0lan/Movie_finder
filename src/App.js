import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_KEY = "649fbb7e";


function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const fetchMovieDetails = async (id) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    setSelectedMovie(data);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-left mb-6">Movie Search</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />

      {/* Modal for details */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded max-w-lg relative">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-2 right-2 text-red-500 font-bold"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-2">
              {selectedMovie.Title} ({selectedMovie.Year})
            </h2>
            <img
              src={
                selectedMovie.Poster !== "N/A"
                  ? selectedMovie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={selectedMovie.Title}
              className="w-40 mb-4"
            />
            <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
            <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
            <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
