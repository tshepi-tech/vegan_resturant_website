import React from "react";

export default function ProductItem({ item }) {
  const { product, description } = item;

  //Properties
  // const coverImage = require(`../Assets/${imageOrigin}`);

  return (
    <div>
      <h3>{product}</h3>
      <p>{description}</p>
      {/* <img className="cardImage" src={coverImage} alt={title} /> */}
      {/* <span>{description}</span> */}
      {/* <p>
        <Link to={title}>View menu</Link>
      </p> */}
    </div>
  );
}
