import React, { useState } from "react";
import { Link } from "react-router-dom";

const Kids = (props) => {
  
  const Acc = () =>
    props.products.filter((data) =>
      !data.name.match("Kids") &&
      !data.name.match("Kids") &&
      !data.name.match("Men")
        ? data
        : ""
    );



  const [KidsFilter, setFilter] = useState("");

  const Kidss = () =>
    props.products.filter((data) => {
      if (KidsFilter === "") {
        return data.name.match("Kids") && data;
      }
      if (KidsFilter === "Hoodie") {
        return data.name.match("Hoodie") && data.name.match("Kids") && data;
      }
      if (KidsFilter === "T-Shirt") {
        return data.name.match("T-Shirt") && data.name.match("Kids") && data;
      }
      if (KidsFilter === "Long Sleeve") {
        return (
          data.name.match("Long Sleeve") && data.name.match("Kids") && data
        );
      }
      if (KidsFilter === "Joggers") {
        return data.name.match("Joggers") && data.name.match("Kids") && data;
      }
    });

 

  const [menuFilter, setMenuFilter] = useState("");

  const [products, setProducts] = useState([]);


 
  return (
    <div className="product-container">
      <div className="cloths-menu">
        <ul className="cloths-menu__list">
          <li className="cloths-menu__item">shop</li>
          <li
            className={`cloths-menu__item    cloths-menu__item${
              KidsFilter === "Tee" ? "--1" : ""
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
              KidsFilter === "Hoodie" ? "--1" : ""
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
        {Kidss().map((item, i) => (
          <Link to={`/Kids/${item.id}`} key={i} className="product-list__box">
          <div className="product-list__click"><h1 >Click for Price</h1></div>
            <img
              src={item.thumbnail_url}
              alt="bb"
              className="product-list__img"
            />
            <span className="product-list__title">{item.name}</span>
            {/* <span className="product-list__price">30$</span> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Kids;
