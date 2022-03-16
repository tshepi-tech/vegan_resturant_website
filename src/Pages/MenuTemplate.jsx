//NPM Packages
import { useParams } from "react-router";

//Project files
import MenuItem from "../Components/MenuItem";
import products from "../Data/products.json";

export default function MenuTemplate() {
  const { category } = useParams();

  return (
    <div id="menu">
      <h2 className="menu_h2"> menu</h2>
      <span>{category} menu</span>
    </div>
  );
}
