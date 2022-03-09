import React from "react";
// import { Link } from "react-router-dom";

//Project files
import ProductItem from "../Components/ProductItem";
import products from "../Data/products.json";

export default function Dishes({}) {
  //Properties
  const Dishes = products.filter((item) => item.category === "Dishes");
  const listDishes = Dishes.map((item) => (
    <ProductItem key={item.id} item={item}></ProductItem>
  ));

  return (
    <div>
      <h2>Dish menu</h2>
      {listDishes}
      {/* <Link to={`/Dishes/${item.id}`}>{listDishes}</Link> */}
    </div>
  );
}
