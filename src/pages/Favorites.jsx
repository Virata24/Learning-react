import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../compoents/MovieCard";
import "../css/Favorites.css"

function Favorite() {
  const { favorites } = useMovieContext(); // Access favorites from context

  if(favorites){
    return (
       <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
            {favorites.map((movie) =>
            <MovieCard movie={movie} key={movie.id}/>
            )}
        </div>
       </div>
    )
  }


  return (
    <div className="favorites-empty">
        <h2>No favorite movies yet </h2>
        <p>Start adding movies to your favorite section</p>
    </div>
  );
}

export default Favorite
