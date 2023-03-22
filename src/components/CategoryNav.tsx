import React from "react";
import { NavCategoryContainer } from "../styles/CategoryNav.styles";

interface CategoryNavProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
  title?: string;
}

const CategoryNav = ({
  setSearch,
  setCategory,
  categories,
  title,
}: CategoryNavProps) => {
  function handleClick({
    target,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
    target: HTMLButtonElement;
  }) {
    setCategory(target.id);
    setSearch("");
  }

  return (
    <NavCategoryContainer className="container">
      <div className="nav-buttons">
        {categories.map((category) => (
          <button
            key={category.category}
            id={category.category}
            onClick={handleClick}
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
