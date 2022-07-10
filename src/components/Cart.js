import { NaturePeopleTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const Cart = ({ list }) => {
  useEffect(() => {
    const empty = document.getElementById("emptyCartContent");
    const not = document.getElementById("notEmptyCartContent");
    if (list.length === 0) {
      empty.classList.remove("hidden");
      not.classList.add("hidden");
    } else {
      empty.classList.add("hidden");
      not.classList.remove("hidden");
    }
  });

  let [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0.0;
    list.forEach((item) => {
      temp += item.count * item.price;
    });
    setTotal(temp);
  }, [list]);

  return (
    <div className=" p-9 flex flex-col justify-center items-center">
      <h2 className=" text-4xl text-center font-medium mb-8">Cart</h2>
      <div
        className=" flex flex-col gap-1 justify-center items-center h-1/3"
        id="emptyCartContent"
      >
        <h3>Your Cart is currently Empty!</h3>
        <h3>
          Continue browsing{" "}
          <Link className=" underline decoration-slate-400" to={"/shop"}>
            here
          </Link>
        </h3>
      </div>
      <div id="notEmptyCartContent">
        <div className=" border-t border-b border-t-slate-500 border-b-slate-500">
          {list.map((item) => {
            return (
              <div
                key={uniqid()}
                className=" p-2 h-32 items-center flex gap-96 justify-between"
              >
                <div className=" flex gap-3">
                  <img
                    src={item.image[1]}
                    alt=""
                    className=" rounded-lg h-28 w-auto"
                  />
                  <h4 className=" text-lg font-medium">{item.name}</h4>
                </div>
                <div className=" flex gap-9">
                  <div className=" flex justify-center items-center p-2 gap-2 rounded-md border border-slate-200">
                    <button className=" text-3xl">-</button>
                    <input
                      type="number"
                      defaultValue={item.count}
                      className=" w-8 text-center p-1"
                    />
                    <button className=" text-3xl">+</button>
                  </div>
                  <div className=" flex justify-center items-center">
                    <h4>{"$" + item.count * item.price + ".00"}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mt-5 flex flex-row-reverse pr-4">
          <div className=" flex flex-col gap-3 items-center">
            <div className=" flex justify-between items-center gap-20">
              <h2>Subtotal</h2>
              <h2>{"$" + total + ".00"}</h2>
            </div>
            <button className=" p-4 text-lg rounded-md bg-black text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
