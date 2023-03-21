import React, { useState, useEffect } from "react";
import { MovieContainer } from "../styles/Movie.styles";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

declare global {
  interface Movie {
    overview: string;
    release_date: string;
    title: string;
    vote_average: number;
    id: number;
    poster_path: string;
  }
}

interface MoviesProps {
  category: string;
}

const Movies = ({ category }: MoviesProps) => {
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
    const url = `${movieURL}/${category}?${apiKey}&language=pt-BR`;
    fetchData(url);
  }, [category]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  return (
    <MovieContainer className="container animeLeft">
      {data.map((movie) => (
        <Link to={`/filme/${movie.title.toLowerCase()}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </MovieContainer>
  );
};

export default Movies;
