import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [queryMovie, setQueryMovie] = useState([]);

  return (
    <BrowserRouter>
      <Header setQueryMovie={setQueryMovie} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieList={movieList}
              setMovieList={setMovieList}
              queryMovie={queryMovie}
            />
          }
        />
        <Route path="/:id" element={<Filme />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
