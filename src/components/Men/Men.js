import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/index";
const Men = (props) => {
 

  const [cart, setCart] = useState([]);

  const [MenFilter, setFilter] = useState("");

  const Mens = () =>
    props.products.filter((data) => {
      if (MenFilter === "") {
        return data.name.match("Men") && data;
      }
      if (MenFilter === "Hoodie") {
        return data.name.match("Hoodie") && data.name.match("Men") && data;
      }
      if (MenFilter === "T-Shirt") {
        return data.name.match("T-Shirt") && data.name.match("Men") && data;
      }
      if (MenFilter === "Long Sleeve") {
        return (
          data.name.match("Long Sleeve") && data.name.match("Men") && data
        );
      }
      if (MenFilter === "Joggers") {
        return data.name.match("Joggers") && data.name.match("Men") && data;
      }
    });

  console.log(Mens(), "jj");

  const [menuFilter, setMenuFilter] = useState("");

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    return await API()
      .get(`/products/${Mens().map((item, i) => item.id)}`)
      .then((data) => setProducts(data.data.result.sync_variants))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const idLoop = (data) => {
    let i = 0;
    let o = {};
  };

  console.log(idLoop(Mens().map((item, i) => item.id)), "price");
  return (
    <div className="product-container">
      <div className="cloths-menu">
        <ul className="cloths-menu__list">
          <li className="cloths-menu__item">shop</li>
          <li
            className={`cloths-menu__item    cloths-menu__item${
              MenFilter === "Tee" ? "--1" : ""
            }`}
            onClick={() => setFilter("T-Shirt")}
          >
            {" "}
            t-shirt{" "}
          </li>
          <li
            className="cloths-menu__item"
            onClick={() => setFilter("Long Sleeve")}
          >
            longsleeve
          </li>

          <li
            onClick={() => setFilter("Hoodie")}
            className={`cloths-menu__item    cloths-menu__item${
              MenFilter === "Hoodie" ? "--1" : ""
            }`}
          >
            hoodie
          </li>
          <li
            className="cloths-menu__item"
            onClick={() => setFilter("Joggers")}
          >
            Joggers
          </li>
        </ul>
      </div>
      <div className="product-list">
        {Mens().map((item, i) => (
          <Link to={`/Men/${item.id}`} key={i} className="product-list__box">
            {console.log(item, "item")}
            <img
              src={item.thumbnail_url}
              alt="bb"
              className="product-list__img"
            />
            <span className="product-list__title">{item.name}</span>
            <span className="product-list__price">30$</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Men;
