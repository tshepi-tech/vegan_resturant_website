import { useParams } from "react-router-dom";
import products from "../Data/products.json";

export default function ProductTemplate() {
  let params = useParams();
  const { id } = params;
  const productItem = products.find((item) => item.id === id);

  return (
    <div>
      <h3>{productItem.product}</h3>
      <p>{productItem.detail}</p>

      <p>{productItem.ingredients[0].name}</p>
      <p>{productItem.ingredients[1].name}</p>
      <p>{productItem.ingredients[2].name}</p>
      <p>{productItem.ingredients[3].name}</p>
      <p>{productItem.ingredients[4].name}</p>
      <table>
        <tbody>
          <tr>
            <td>{productItem.nutrition[0].label}</td>
            <td>{productItem.nutrition[1].label}</td>
            <td>{productItem.nutrition[2].label}</td>
            <td>{productItem.nutrition[3].label}</td>
          </tr>
          <tr>
            <td>{productItem.nutrition[0].value}</td>
            <td>{productItem.nutrition[1].value}</td>
            <td>{productItem.nutrition[2].value}</td>
            <td>{productItem.nutrition[3].value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
