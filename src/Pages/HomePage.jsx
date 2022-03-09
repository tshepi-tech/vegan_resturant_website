import React from "react";

//Project files
import Hero from "../Components/Hero";
import CategoryCard from "../Components/CategoryCard";
import categories from "../Data/categories.json";

export default function HomePage() {
  const Categories = categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));

  return (
    <div>
      <Hero />
      {Categories}
    </div>
  );
}
