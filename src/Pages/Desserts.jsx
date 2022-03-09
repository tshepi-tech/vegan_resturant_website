import React from "react";

//Project files
import ProductItem from "../Components/ProductItem";
import products from "../Data/products.json";

export default function Dessers({}) {
  //Properties
  const Desserts = products.filter((item) => item.category === "Desserts");
  const listDesserts = Desserts.map((item) => (
    <ProductItem key={item.id} item={item}></ProductItem>
  ));

  return (
    <div>
      <h2>Desserts menu</h2>
      {listDesserts}
      {/* <Link to={`/Dishes/${item.id}`}>{listDishes}</Link> */}
    </div>
  );
}
