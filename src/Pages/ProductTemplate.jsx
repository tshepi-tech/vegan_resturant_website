//NPM Packages
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

//Project files
import products from "../Data/products.json";

export default function ProductTemplate() {
  const { productId } = useParams();

  //Properties
  const productItem = products.find((item) => item.productId === productId);
  const navigate = useNavigate();

  const Ingredients = productItem.ingredients.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  let imageURL = "";
  imageURL = require(`../Assets/${productItem.imageSource}`);

  return (
    <div className="product">
      <img src={imageURL} alt="product display" />
      <button onClick={() => navigate(-1)}>Go back</button>
      <h3>{productItem.product}</h3>
      <p>{productItem.detail}</p>
      <h3>Ingredients</h3>
      <ul>{Ingredients}</ul>
      {/* <p>{productItem.ingredients[0].name}</p>
      <p>{productItem.ingredients[1].name}</p>
      <p>{productItem.ingredients[2].name}</p>
      <p>{productItem.ingredients[3].name}</p>
      <p>{productItem.ingredients[4].name}</p> */}
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
