import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { ListContainer } from "../styles/List.styles";
import { MoviesContainer } from "../styles/Movies.styles";
import MovieCard from "./MovieCard";

const List = () => {
  const { list } = useContext(GlobalContext);

  return (
    <ListContainer className="container">
      <h1>Minha Lista</h1>
      <MoviesContainer>
        {list.map((movie) => (
          <Link to={`/filme/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </MoviesContainer>
    </ListContainer>
  );
};

export default List;
