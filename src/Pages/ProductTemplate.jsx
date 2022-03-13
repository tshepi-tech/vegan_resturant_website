import { useParams } from "react-router-dom";
import products from "../Data/products.json";

export default function ProductTemplate() {
  //Properties
  let params = useParams();
  const { id } = params;
  const productItem = products.find((item) => item.id === id);

  return (
    <div className="product">
      <h3>{productItem.product}</h3>
      <p>{productItem.detail}</p>
      <h3>Ingredients</h3>
      <p>{productItem.ingredients[0].name}</p>
      <p>{productItem.ingredients[1].name}</p>
      <p>{productItem.ingredients[2].name}</p>
      <p>{productItem.ingredients[3].name}</p>
      <p>{productItem.ingredients[4].name}</p>
      <table>
        <tbody>
          <h3>Nutrition</h3>
          <tr>
            <td>{productItem.nutrition[0].label}</td>
            <td>{productItem.nutrition[0].value}</td>
          </tr>
          <tr>
            <td>{productItem.nutrition[1].label}</td>
            <td>{productItem.nutrition[1].value}</td>
          </tr>
          <tr>
            <td>{productItem.nutrition[2].label}</td>
            <td>{productItem.nutrition[2].value}</td>
          </tr>
          <tr>
            <td>{productItem.nutrition[3].label}</td>
            <td>{productItem.nutrition[3].value}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
