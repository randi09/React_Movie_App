import React from "react";

export default function MoviesCard(props) {
  return (
    <div>
      <h1>{props.movieCached.Title}</h1>
      <img src={props.movieCached.Poster} />
    </div>
  );
}
