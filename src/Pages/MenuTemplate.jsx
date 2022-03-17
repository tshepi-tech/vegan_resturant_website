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
  const filteredProducts = products.filter(
    (item) => item.categoryId === categoryId
  );
  console.log(filteredProducts);
  //Components
  const Products = filteredProducts.map((item) => (
    <MenuItem key={item.id} item={item} />
  ));

  // Safeguard
  if (category === undefined) return <Link to="/">Menu not found go home</Link>;

  return (
    <div id="menu">
      <h2 className="menu_h2"> {category.title} menu</h2>
      <section>{Products}</section>
    </div>
  );
}
