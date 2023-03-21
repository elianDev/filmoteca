import React, { useEffect, useState } from "react";
import CategoryNav from "./CategoryNav";
import Movies from "./Movies";

const categories = [
  { category: "popular", title: "Populares" },
  { category: "top_rated", title: "Melhores Avaliações" },
  { category: "now_playing", title: "Em cartaz" },
  { category: "upcoming", title: "Em breve" },
];

declare global {
  interface Category {
    category: string;
    title: string;
  }
}

const Home = () => {
  const [category, setCategory] = useState("popular");
  const [title, setTitle] = useState<Category | undefined>(undefined);

  useEffect(() => {
    setTitle(
      categories.find((element) => {
        return element.category === category;
      }),
    );
  }, [category]);

  return (
    <div>
      <CategoryNav
        setCategory={setCategory}
        categories={categories}
        {...title}
      />
      <Movies category={category} />
    </div>
  );
};

export default Home;
