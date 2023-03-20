import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/film-solid.svg";
import { HeaderContainer } from "../styles/Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} alt="Logo" />
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="lista">Minha Lista</NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
