import React from "react";
import { useState } from "react";
import { tempWatchedData } from "../../data/data";
import WatchedSummary from "../WatchedSummary/WatchedSummary";
import WatchedMoviesList from "../WatchedMoviesList/WatchedMoviesList";

const WatchedBox = () => {
  /*
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  */

  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  //   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  //   const avgUserRating = average(watched.map((movie) => movie.userRating));
  //   const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="box">
      <button
        className="btn-toggle"
        type="button"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          {/* <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div> */}
          <WatchedSummary watched={watched} />

          {/* <ul className="list">
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </div>
              </li>
            ))}
          </ul> */}
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
