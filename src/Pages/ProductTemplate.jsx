import { useParams } from "react-router-dom";
//import ProductItem from "../Components/ProductItem"
import products from "../Data/products.json";

export default function ProductTemplate({ item }) {
  let params = useParams();
  const { id } = params;
  let food = products.find((item) => item.id === id);

  console.log("food", food);
  console.log("item", item);
  console.log(products);
  console.log("params", params);
  console.log("paramsid", params.id);
  return (
    <div>
      <h1>hi:{params.id}</h1>
      <h3>{food.product}</h3>
    </div>
  );
}
