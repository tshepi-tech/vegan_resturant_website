import React from "react";

//Project files
import ProductItem from "../Components/ProductItem";
import products from "../Data/products.json";

export default function Drinks() {
  //Properties
  const Drinks = products.filter((item) => item.category === "Drinks");
  const listDrinks = Drinks.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h2>Drinks menu</h2>
      {listDrinks}
    </div>
  );
}
