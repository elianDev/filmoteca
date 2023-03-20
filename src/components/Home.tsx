import React, { useState, useEffect } from "react";
import { HomeContainer } from "../styles/Home.styles";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

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

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);
  const [data, setData] = useState<Movie[] | null>(null);

  useEffect(() => {
    async function fetchData(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        console.log(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    const url = `${movieURL}/popular?${apiKey}&language=pt-BR`;
    fetchData(url);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  return (
    <HomeContainer>
      <div className="container">
        {data.map((movie) => (
          <Link to={`/filme/${movie.title.toLowerCase()}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </HomeContainer>
  );
};

export default Home;
