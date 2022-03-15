import MenuItem from "../Components/MenuItem";
import products from "../Data/products.json";

export default function MenuTemplate({ category }) {
  const menuItems = products.filter((item) => item.category === category);
  const listItems = menuItems.map((item) => (
    <MenuItem category={category} key={item.id} item={item}></MenuItem>
  ));

  return (
    <div>
      <h2 className="menu_h2"> {category} menu</h2>
      {listItems}
      {/* No comments in production -1 */}
      {/* <Link to={`/Dishes/${item.id}`}>{listDishes}</Link> */}
    </div>
  );
}
