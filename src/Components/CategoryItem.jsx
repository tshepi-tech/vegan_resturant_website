import React from "react";

// great
export default function CategoryItem({ item }) {
  const { title, description, imageOrigin } = item;

  //Properties
  const coverImage = require(`../Assets/${imageOrigin}`);

  return (
    <div className="homepage">
      <h2>{title}</h2>
      <div className="homepage_inner">
        <img className="cardImage" src={coverImage} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}
