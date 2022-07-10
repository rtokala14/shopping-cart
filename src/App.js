import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cartInfo, setCartInfo] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [universe, setUniverse] = useState("marvel");
  const [affiliation, setAffiliation] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartInfo={cartInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                universe={universe}
                setUniverse={setUniverse}
                affiliation={affiliation}
                setAffiliation={setAffiliation}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                cartInfo={cartInfo}
                setCartInfo={setCartInfo}
                cartList={cartList}
                setCartList={setCartList}
              />
            }
          />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/cart" element={<Cart list={cartList} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
