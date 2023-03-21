import React from "react";
import { MovieCardContainer } from "../styles/MovieCard.styles";
import { Star } from "@phosphor-icons/react";

const imageURL = import.meta.env.VITE_IMAGEM;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <MovieCardContainer>
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <div className="content">
        <h2>{movie.title}</h2>
        <div className="content-score">
          <span>
            <Star size={24} />
          </span>
          <span>{movie.vote_average.toString()}</span>
        </div>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
