import React, { useState } from "react";

import data from "./data";
import Products from "./components/Products";
import { UserContext, CartContext } from "./components/context/index";
import logo from "./img/foreverin.png";
import banner1 from "./img/banner.1.jpg";
import banner2 from "./img/baner.2.jpg";
import img1 from "./img/codiene_hank_t-shirt.jpg"
import shoppingcart from "./img/cart.png"
import main1 from "./img/main1.jpg"
import main2 from "./img/main2.png"
import main3 from "./img/main3.png"
import "./css/index.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  console.log(products)
  return (
   <>
   
      <div className="banner">
        <Carousel
          className="carousel"
          autoPlay
          showThumbs={false}
          transitionTime="1500 "
          interval="5000"
          infiniteLoop
        >
          <div>
            {" "}
            <img className="banner__img" src={banner1} alt="ff" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img className="banner__img" src={banner2} alt="ff" />
            {/* <p className="legend">Legend 2</p> */}
        
          </div>
          {/* <div>
                <img className="banner__img" src={banner1} alt="ff"/>
                    <p className="legend">Legend 3</p>
                </div>
     */}
     
        </Carousel>{" "}
        <a href="#" className="btn-shopNow">
          {" "}
          Shop now
        </a>
      </div>
      <div className="content">
<ul className="collection">
<li className="collection__word">c</li>
<li className="collection__word">o</li>
<li className="collection__word">l</li>
<li className="collection__word">l</li>
<li className="collection__word">e</li>
<li className="collection__word">c</li>
<li className="collection__word">t</li>
<li className="collection__word">i</li>
<li className="collection__word">o</li>
<li className="collection__word">n</li>

</ul>



<div className="main-content">
<div className="top-img">
<img className="main-content__img main-content__img--1" src={main1} alt="img"/>
<img className="main-content__img  main-content__img--2" src={main2} alt="img"/>
<img className="main-content__img  main-content__img--3" src={main3} alt="img"/>
<h1 className="h1-fade">Forever Immortal</h1>
</div>

</div>


      </div></>
   
  );
}

export default Home;
