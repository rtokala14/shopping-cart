import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import { useState } from "react";

function App() {
  const [cartInfo, setCartInfo] = useState({ count: 0, contents: [] });
  const [universe, setUniverse] = useState("marvel");
  const [affiliation, setAffiliation] = useState("avengers");
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
                setCartInfo={setCartInfo}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
