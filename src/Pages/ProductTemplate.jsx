import { useParams } from "react-router-dom";
import products from "../Data/products.json";

export default function ProductTemplate() {
  let params = useParams();
  const { id } = params;
  const productItem = products.find((item) => item.id === id);

  return (
    <div>
      <h3>{productItem.product}</h3>
    </div>
  );
}
