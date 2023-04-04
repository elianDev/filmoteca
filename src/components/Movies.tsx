import React, { useState, useEffect } from "react";
import { MoviesContainer } from "../styles/Movies.styles";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import NotFound from "./NotFound";

const movieURL = import.meta.env.VITE_API;
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

declare global {
  interface Movie {
    overview: string;
    release_date: string;
    title: string;
    vote_average: number;
    id: number;
    poster_path: string;
    original_title: string;
    runtime: number;
  }
}

interface MoviesProps {
  category: string;
  search: string;
}

const Movies = ({ category, search }: MoviesProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | boolean>(false);
  const [data, setData] = useState<Movie[] | null>(null);

  useEffect(() => {
    async function fetchData(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    let url = "";
    if (search) {
      url = `${searchURL}?${apiKey}&language=pt-BR&page=1&query=${search}`;
    } else {
      url = `${movieURL}/${category}?${apiKey}&language=pt-BR`;
    }
    fetchData(url);
  }, [category, search]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  if (data.length === 0) return <NotFound />;
  return (
    <MoviesContainer className="container animeLeft">
      {data.map((movie) => (
        <Link to={`/filme/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </MoviesContainer>
  );
};

export default Movies;
