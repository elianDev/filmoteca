import React from "react";
import { SmileySad } from "@phosphor-icons/react";
import { NotFoundContainer } from "../styles/NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundContainer className="container">
      <SmileySad size={40} />
      <h2>Nenhum resultado encontrado.</h2>
    </NotFoundContainer>
  );
};

export default NotFound;
