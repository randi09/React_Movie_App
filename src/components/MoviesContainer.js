import React, { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   getMovieData();
  // }, []);

  const getMovieData = async () => {
    const movieData = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=ab001ce6&s=${search}`
    );
    const jsonData = await movieData.json();
    setMovies(jsonData.Search);
  };

  return (
    <div>
      <h1>Movies Container</h1>
      <div>
        {movies &&
          movies.map((movieCached, index) => (
            <MoviesCard
              movieCached={movieCached}
              setMovies={setMovies}
              key={index}
            />
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getMovieData();
        }}
      >
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
