import { useParams } from "react-router-dom";
import products from "../Data/products.json";

export default function ProductTemplate() {
  let params = useParams();
  const { id } = params;
  const productItem = products.find((item) => item.id === id);
  const ingredients = productItem.ingredients.map((item) => (
    <li key={item.id} item={item}></li>
  ));
  console.log(productItem.ingredients);
  return (
    <div>
      <h3>{productItem.product}</h3>
      <p>{productItem.detail}</p>
      <ul>{ingredients}</ul>
    </div>
  );
}
