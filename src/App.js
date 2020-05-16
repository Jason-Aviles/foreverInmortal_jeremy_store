import React, { useState, useEffect } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import data from "./data";
import Products from "./components/Products";
import { UserContext, CartContext } from "./components/context/index";
import logo from "./img/foreverin.png";

import shoppingcart from "./img/cart.png";
import Home from "./home";
import "./css/index.css";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { API } from "./components/utils/index";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
 
  const fetchProducts = () => {
    API()
      .get("/products")
      .then((data) => setProducts(data.data.result))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchProducts(), []);
  console.log(products, "here");
  return (
    <div className="container">
      <header className="header">
        <div className="logo-header__container">
          <Link to="/">
            {" "}
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="shopping-cart">
            <img className="shopping-cart__img" src={shoppingcart} alt="cart" />
          </div>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                exact
                className="nav__item"
                activeClassName="active"
                to="/Men"
              >
                Men
              </NavLink>{" "}
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__item"
                exact
                activeClassName="active"
                to="/Women"
              >
                Women
              </NavLink>{" "}
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__item"
                exact
                activeClassName="active"
                to="/Kids"
              >
                Kids
              </NavLink>{" "}
            </li>
          </ul>
          <div className="search_bar">
            <input type="text" className="search-bar__input" />
          </div>
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/Men"
        render={(props) => <Men {...props} products={products} />}
      />

<Route
        exact
        path="/Women"
        render={(props) => <Women {...props} products={products} />}
      />

<Route
        exact
        path="/Women/:id"
        render={(props) => <Products {...props} products={products} />}
      />
    </div>
  );
}

export default App;
