import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl mx-auto">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
        ))
      ) : (
        <p className="col-span-3 text-center">No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;
