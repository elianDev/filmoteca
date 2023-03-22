import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MovieContainer } from "../styles/Movie.styles";
import { Star, ArrowCircleLeft } from "@phosphor-icons/react";
import Loading from "./Loading";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMAGEM;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | boolean>(false);

  useEffect(() => {
    async function fetchMovie(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMovie(json);
        setLoading(false);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie(`${movieURL}/${id}?${apiKey}&language=pt-BR`);
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  return (
    <MovieContainer className="container">
      <NavLink to="/" end>
        <ArrowCircleLeft size={32} />
        Voltar
      </NavLink>
      <div className="movie-container">
        <img src={imageURL + movie?.poster_path} alt="" />
        <div className="content">
          <h1>{movie?.title}</h1>
          <p className="content-original-title">{movie?.original_title}</p>
          <p>{movie?.overview}</p>
          <p>Data de lançamento: {movie?.release_date.replaceAll("-", "/")}</p>
          <p>Duração: {movie?.runtime}min</p>
          <p className="content-rating">
            <Star />
            {movie?.vote_average.toFixed(2)}
          </p>
          <button>Adicionar</button>
        </div>
      </div>
    </MovieContainer>
  );
};

export default Movie;
