import products from "../Data/products.json";
import MenuItem from "../Components/MenuItem";

export default function MenuTemplate({ category }) {
  const menuItems = products.filter((item) => item.category === category);
  console.log(menuItems);
  const listItems = menuItems.map((item) => (
    <MenuItem category={category} key={item.id} item={item}></MenuItem>
  ));

  return (
    <div>
      <h2> {category} menu</h2>
      {listItems}
      {/* <Link to={`/Dishes/${item.id}`}>{listDishes}</Link> */}
    </div>
  );
}
