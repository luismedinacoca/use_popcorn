import Navbar from "./componenets/Navbar/Navbar";
import Main from "./componenets/Main/Main";
import { useState } from "react";
import { tempMovieData } from "./data/data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
