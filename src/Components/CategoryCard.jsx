import React from "react";

export default function CategoryCard({ category }) {
  const { title, description } = category;

  return (
    <div>
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
}
