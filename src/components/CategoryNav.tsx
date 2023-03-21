import React from "react";
import { NavCategoryContainer } from "../styles/CategoryNav.styles";

interface CategoryNavProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
  title?: string;
}

const CategoryNav = ({ setCategory, categories, title }: CategoryNavProps) => {
  return (
    <NavCategoryContainer className="container">
      <div className="nav-buttons">
        {categories.map((category) => (
          <button
            key={category.category}
            id={category.category}
            onClick={({ target }) => setCategory(target.id)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <h1>{title}</h1>
    </NavCategoryContainer>
  );
};

export default CategoryNav;
