import Products from "./products/Products";
import uniqid from "uniqid";
//import { ShoppingCartOutlined } from "@material-ui/icons";

const Shop = ({
  universe,
  setUniverse,
  affiliation,
  setAffiliation,
  searchValue,
  setSearchValue,
  cartInfo,
  setCartInfo,
}) => {
  const Card = ({ cardId, prod }) => {
    const decrProdCounter = (e) => {
      if (e.target.nextElementSibling.value > 0) {
        e.target.nextElementSibling.value =
          Number(e.target.nextElementSibling.value) - 1;
      }
    };

    const incrProdCounter = (e) => {
      e.target.previousElementSibling.value =
        Number(e.target.previousElementSibling.value) + 1;
    };

    const updateCart = (e) => {
      const counter =
        e.target.parentElement.previousElementSibling.children[1].value;
      /*const info = {
        count: field.nodeValue,
        product: prod,
      };
      setCartInfo(info);*/
      console.log(counter);
      setCartInfo(Number(cartInfo) + Number(counter));
      prod.count = Number(counter);
    };

    return (
      <li>
        <div className=" flex flex-col hover:cursor-pointer">
          <div className=" w-80 h-80 flex justify-center items-center bg-slate-100">
            <img src={prod.image[1]} alt="" />
          </div>
          <div className=" w-80 h-24 flex justify-between items-center">
            <div className=" flex flex-col gap-1">
              <h2 className=" text-lg font-medium">{prod.name}</h2>
              <h3>{`$${prod.price}`}</h3>
            </div>
            <div className=" flex items-end gap-1">
              <div className=" pr-2 flex justify-center items-center">
                <button className=" text-3xl" onClick={decrProdCounter}>
                  -
                </button>
                <input
                  type="number"
                  defaultValue={0}
                  className=" w-8 text-center p-1"
                  id={`prod-card_${cardId}`}
                />
                <button className=" text-3xl" onClick={incrProdCounter}>
                  +
                </button>
              </div>
              <button
                className=" pb-2 pointer-events-none"
                onClick={updateCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pointer-events-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    className=" pointer-events-none"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className=" p-4 flex justify-center items-center">
      <ul className=" flex flex-wrap justify-center items-center gap-4">
        {Products.map((product) => {
          if (product.universe !== universe) return;
          if (searchValue !== "") {
            if (
              product.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return <Card key={uniqid()} prod={product} cardId={uniqid()} />;
            }
          } else if (product.affiliation === affiliation)
            return <Card key={uniqid()} prod={product} cardId={uniqid()} />;
        })}
      </ul>
    </div>
  );
};

export default Shop;
