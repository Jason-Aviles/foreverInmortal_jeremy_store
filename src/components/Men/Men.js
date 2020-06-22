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



  const [menuFilter, setMenuFilter] = useState("");

  const [products, setProducts] = useState([]);


  // 175525982


  const fetchProducts = async () => {
    //  const res = await  API()
    //     .get(`/products/${props.match.params.id}`)
    //     .then((data) => setProducts(data.data.result.sync_variants))
    //     .catch((err) => console.log(err));
       
    // .retail_price
        
        try {
let res = await  API()
        .get(`/products/175525982`)
       
return res.data
  
        } catch (err) {
          console.log(err)
        }
  }  

// useEffect(()=>{console.log(fetchProducts())},[])

console.log("object",props.products)
  return (
    <div className="product-container">
      <div className="cloths-menu">
        <ul className="cloths-menu__list">
          <li className="cloths-menu__item">shop</li>
          <li
            className={`cloths-menu__item    cloths-menu__item${
              MenFilter === "T-Shirt" ? "--1" : ""
            }`}
            onClick={() => setFilter("T-Shirt")}
          >
            {" "}
            t-shirt{" "}
          </li>
          <li
             className={`cloths-menu__item    cloths-menu__item${
              MenFilter === "Long Sleeve" ? "--1" : ""
            }`}
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
               className={`cloths-menu__item    cloths-menu__item${
              MenFilter === "Joggers" ? "--1" : ""
            }`}
            onClick={() => setFilter("Joggers")}
          >
            Joggers
          </li>
        </ul>
      </div>
      <div className="product-list">
        {Mens().map((item, i) => (
          <Link  to={`/Men/${item.id}`} key={i} className="product-list__box">
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

export default Men;
