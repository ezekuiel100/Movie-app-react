import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./Components/Header";
import { createContext, useState } from "react";

export const PropsContext = createContext();

function App() {
  let [movieList, setMovieList] = useState([]);
  const [queryMovie, setQueryMovie] = useState([]);
  const [search, setSearch] = useState("");

  {
    queryMovie.length > 0 ? (movieList = queryMovie) : movieList;
  }

  return (
    <PropsContext.Provider
      value={{
        movieList,
        setMovieList,
        queryMovie,
        setQueryMovie,
        search,
        setSearch,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Filme />}></Route>
        </Routes>
      </BrowserRouter>
    </PropsContext.Provider>
  );
}

export default App;
