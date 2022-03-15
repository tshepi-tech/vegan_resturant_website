import React from "react"; // no need to import React (i may start removing points in future project for unnecesary imports)

//Project files
import Hero from "../Components/Hero";
import CategoryItem from "../Components/CategoryItem";
import categories from "../Data/categories.json";

// good
export default function HomePage() {
  const Categories = categories.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));

  return (
    <div>
      <Hero />
      {Categories}
    </div>
  );
}
