import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();
  return menu;
}

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className=" divide-y divide-stone-200 px-2">
      {menu.map((el) => (
        <MenuItem pizza={el} key={el.id} />
      ))}
    </ul>
  );
}

export default Menu;
