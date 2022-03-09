import React from "react";

//Project files
import Hero from "../Components/Hero";
import CategoryItem from "../Components/CategoryItem";
import categories from "../Data/categories.json";

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
