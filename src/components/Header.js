import { Badge } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className=" flex justify-between p-6 items-center">
      <div className=" pl-10">
        <h1 className=" text-4xl font-bold">Geekables</h1>
      </div>
      <ul className=" flex gap-5 pr-5 justify-evenly">
        <li className=" header-option">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" header-option">
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li className=" header-option">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" hover:cursor-pointer">
          <Badge badgeContent={props.cartInfo} overlap="rectangular">
            <ShoppingCartRounded />
          </Badge>
        </li>
      </ul>
    </header>
  );
};

export default Header;
