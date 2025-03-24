import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { useState } from "react";
import { tempMovieData } from "./data/data";

import Search from "./components/Search/Search";
import NumResult from "./components/NumResult/NumResult";

import ListBox from "./components/ListBox/ListBox";
import WatchedBox from "./components/WatchedBox/WatchedBox";

import MovieList from "./components/MovieList/MovieList";

export default function App() {
  /* Composition: Fixing the prop drilling issue */
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar>
        <Search />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}
