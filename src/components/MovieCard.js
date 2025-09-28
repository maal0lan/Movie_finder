import React from "react";

function MovieCard({ movie, onSelectMovie }) {
  return (
    <div
      onClick={() => onSelectMovie(movie.imdbID)}
      className="bg-gray-700 p-3 rounded shadow cursor-pointer hover:bg-slate-800 display-flex items-center flex-col"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-72 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-bold">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
