import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="filme/:id" element={<Movie />} />
        <Route path="lista" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
