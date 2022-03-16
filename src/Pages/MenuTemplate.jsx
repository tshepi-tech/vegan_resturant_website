//NPM Packages
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//Project files
import MenuItem from "../Components/MenuItem";
import categories from "../Data/categories.json";
import products from "../Data/products.json";

export default function MenuTemplate() {
  const { categoryId } = useParams();

  //Properties
  const category = categories.find((item) => item.categoryId === categoryId);

  // Safeguard
  if (category === undefined) return <Link to="/">Menu not found go home</Link>;

  return (
    <div id="menu">
      <h1>hi</h1>
      <h2 className="menu_h2"> {category.title} menu</h2>
    </div>
  );
}
