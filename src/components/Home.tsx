import React, { useState } from "react";
import CategoryNav from "./CategoryNav";
import Movies from "./Movies";

const Home = () => {
  const [category, setCategory] = useState("popular");

  return (
    <div>
      <CategoryNav setCategory={setCategory} />
      <Movies category={category} />
    </div>
  );
};

export default Home;
