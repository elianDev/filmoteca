import React from "react";
import { NavCategoryContainer } from "../styles/CategoryNav.styles";

const categories = [
  { category: "popular", title: "Populares" },
  { category: "top_rated", title: "Melhores Avaliações" },
  { category: "now_playing", title: "Em cartaz" },
  { category: "upcoming", title: "Em breve" },
];

interface CategoryNavProps {
  setCategory: (value: string) => void;
}

const CategoryNav = ({ setCategory }: CategoryNavProps) => {
  return (
    <NavCategoryContainer className="container">
      {categories.map((category) => (
        <button
          key={category.category}
          id={category.category}
          onClick={({ target }) => setCategory(target.id)}
        >
          {category.title}
        </button>
      ))}
    </NavCategoryContainer>
  );
};

export default CategoryNav;
