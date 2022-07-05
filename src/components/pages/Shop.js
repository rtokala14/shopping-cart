import Products from "./products/Products";
import uniqid from "uniqid";

const Shop = ({
  universe,
  setUniverse,
  affiliation,
  setAffiliation,
  searchValue,
  setSearchValue,
}) => {
  const Card = ({ prod }) => {
    return (
      <li>
        <div>
          <img src={prod.image[1]} alt="" />
        </div>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {Products.map((product) => {
          if (product.universe !== universe) return;
          if (searchValue !== "") {
            if (
              product.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return <Card key={uniqid()} prod={product} />;
            }
          } else if (product.affiliation === affiliation)
            return <Card key={uniqid()} prod={product} />;
        })}
      </ul>
    </div>
  );
};

export default Shop;
