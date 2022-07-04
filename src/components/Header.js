import { Badge } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";

const Header = () => {
  return (
    <div className=" flex justify-between p-6 items-center">
      <div className=" pl-10">
        <h1 className=" text-4xl font-bold">Geekables</h1>
      </div>
      <ul className=" flex gap-5 pr-5 justify-evenly">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>
          <Badge>
            <ShoppingCartRounded />
          </Badge>
        </li>
      </ul>
    </div>
  );
};

export default Header;
