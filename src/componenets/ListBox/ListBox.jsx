import { useState } from "react";
import MovieList from "../MovieList/MovieList";
// import { tempMovieData } from "../../data/data";

const ListBox = () => {
  //const [movies, setMovies] = useState(tempMovieData);
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        type="button"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <MovieList />
        // <ul className="list">
        //   {movies?.map((movie) => (
        //     <li key={movie.imdbID}>
        //       <img src={movie.Poster} alt={`${movie.Title} poster`} />
        //       <h3>{movie.Title}</h3>
        //       <div>
        //         <p>
        //           <span>🗓</span>
        //           <span>{movie.Year}</span>
        //         </p>
        //       </div>
        //     </li>
        //   ))}
        // </ul>
      )}
    </div>
  );
};

export default ListBox;
