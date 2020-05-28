import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Women = (props) => {
  const Women = () =>
    props.products.filter((data) => data.name.match("Women") && data);
  const Kids = () =>
    props.products.filter((data) => data.name.match("Kids") && data);
  const Acc = () =>
    props.products.filter((data) =>
      !data.name.match("Kids") &&
      !data.name.match("Women") &&
      !data.name.match("Men")
        ? data
        : ""
    );

  const [cart, setCart] = useState([]);

  const [womenFilter, setFilter] = useState("");

  const Womens = () =>
    props.products.filter((data) => {
      if (womenFilter === "") {
        return data.name.match("Women") && data;
      }
      if (womenFilter === "Hoodie") {
        return data.name.match("Hoodie") && data.name.match("Women") && data;
      }
      if (womenFilter === "T-Shirt") {
        return data.name.match("T-Shirt") && data.name.match("Women") && data;
      }
      if (womenFilter === "Long Sleeve") {
        return (
          data.name.match("Long Sleeve") && data.name.match("Women") && data
        );
      }
      if (womenFilter === "Joggers") {
        return data.name.match("Joggers") && data.name.match("Women") && data;
      }
    });



  const [menuFilter, setMenuFilter] = useState("");

  const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   return await API()
  //     .get(`/products/${Womens().map((item, i) => item.id)}`)
  //     .then((data) => setProducts(data.data.result.sync_variants))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);


  
  return (
    <div className="product-container">
      <div className="cloths-menu">
        <ul className="cloths-menu__list">
          <li className="cloths-menu__item">shop</li>
          <li
            className={`cloths-menu__item    cloths-menu__item${
              womenFilter === "T-Shirt" ? "--1" : ""
            }`}
            onClick={() => setFilter("T-Shirt")}
          >
            {" "}
            t-shirt{" "}
          </li>
          <li
              className={`cloths-menu__item    cloths-menu__item${
              womenFilter === "Long Sleeve" ? "--1" : ""
            }`}
            onClick={() => setFilter("Long Sleeve")}
          >
            longsleeve
          </li>

          <li
            onClick={() => setFilter("Hoodie")}
            className={`cloths-menu__item    cloths-menu__item${
              womenFilter === "Hoodie" ? "--1" : ""
            }`}
          >
            hoodie
          </li>
          <li
             className={`cloths-menu__item    cloths-menu__item${
              womenFilter === "Joggers" ? "--1" : ""
            }`}
            onClick={() => setFilter("Joggers")}
          >
            Joggers
          </li>
        </ul>
      </div>
      <div className="product-list">
        {Womens().map((item, i) => (
          <Link to={`/Women/${item.id}`} key={i} className="product-list__box">
           
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

export default Women;
