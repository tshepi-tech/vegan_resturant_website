import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  const { description, product, thumbnailSource } = item;

  //Properties
  const coverImage = require(`../Assets/${thumbnailSource}`);

  return (
    <div>
      {/* <h3>{product}</h3> */}
      <h3>
        <Link to={`/category/${item.id}`}>{product}</Link>
      </h3>
      <img className="cardImage" src={coverImage} alt={product} />
      {/* <span>{description}</span> */}
      <p>{description}</p>
      {/* <p>
      </p> */}
    </div>
  );
}
