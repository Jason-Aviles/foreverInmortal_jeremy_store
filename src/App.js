
import React, { useState, useEffect } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import Kids from "./components/Kids/Kids"
import Products from "./components/Products";
import { UserContext, CartContext } from "./components/context/index";
import logo from "./img/main-logo.png";
import Cart from './components/Cart'
import shoppingcart from "./img/cart.png";
import Home from "./home";

import "./css/index.css";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Recipient from "./components/Recipient"
import { API } from "./components/utils/index";
import Finalcheck from "./components/Finalcheck"
require('dotenv').config()
function App() {


  let oldCart=JSON.parse(localStorage.getItem('shoppingCart'))

  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState('');
  const [cart, setCart] = useState([]);

const [itemRecipient, setItemRecipient] = useState([]);






  const addToCart = (id,cart,setCart) => {
    if(  JSON.parse(localStorage.getItem('shoppingCart')) || JSON.parse(localStorage.getItem('shoppingCart')).length >  cart.length  ){

      setCart(oldCart)
     
       }
      
   if(!JSON.parse(localStorage.getItem('shoppingCart')) ||  cart.length > oldCart.length ){
     
    localStorage.setItem('shoppingCart', JSON.stringify( cart)) 
   }
        // if(!oldCart || cart.length >  JSON.parse(localStorage.getItem('shoppingCart')).length){
        //   // setCart(JSON.parse(localStorage.getItem('shoppingCart')))
        //   localStorage.setItem('shoppingCart', JSON.stringify(cart))
        // }
    //       if(JSON.parse(localStorage.getItem('shoppingCart')).length > cart.length){
    //         setCart(JSON.parse(localStorage.getItem('shoppingCart')))}
    localStorage.setItem('shoppingCart', JSON.stringify( cart))
    let tempProducts = [...products];

    const index = tempProducts.map((item) => item.id).indexOf(id);

    //  .indexOf(name))
    // .filter((i) => i > -1)[0];
    // const index2 = props.productData.map((info) => info.category).indexOf(main);
    //  const index =index2.indexOf( "KFC") ;
    // console.log(index,"temp")
    const product = tempProducts[index];

    // setDetailProducts(tempProducts);
    return  setCart([...cart, product]);

    //  ;
    //
  };
 









  const updateCart = ()=>{ 


    
    if( !JSON.parse(localStorage.getItem('shoppingCart')) || cart.length > oldCart.length ){
    return localStorage.setItem('shoppingCart', JSON.stringify(cart)) 
    }
   
    
     if( cart.length >0 && !JSON.parse(localStorage.getItem('shoppingCart')) ){
    return  localStorage.setItem('shoppingCart', JSON.stringify(cart))
    }
   
   else{return}
   }
   
   useEffect(()=>updateCart(),[])



 
  const fetchProducts = async () => {
  return await  API()
      .get("/products")
      .then((data) => setProducts(data.data.result))
      .catch((err) => console.log(err));
  };

  useEffect(() =>{ fetchProducts()}, []);
  console.log("{object}",products)

  return (
    <div className="container">
      <header className="header">
        <div className="logo-header__container">
      
        <div className="logo-header-img__container"></div>
          <Link className="logo__link" to="/">
            {" "}
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="shopping-cart">
          <Link className="logo__link" to="/cart">
            <img className="shopping-cart__img" src={shoppingcart} alt="cart" /><h4 className="shopping-cart__circle" >{!cart.length ? 0 : cart.length}</h4></Link>
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
        render={(props) => <Women {...props} price={price} products={products} />}
      />

<Route
        exact
        path="/Kids"
        render={(props) => <Kids {...props} price={price} products={products} />}
      />

<Route
        exact
        path="/Women/:id"
        render={(props) => <Products {...props} cart={cart} setCart={setCart}  setPrice={setPrice} products={products} />}
      />
      <Route
        exact
        path="/Men/:id"
        render={(props) => <Products {...props} cart={cart} setCart={setCart}  setPrice={setPrice} products={products} />}
      />

<Route
        exact
        path="/Kids/:id"
        render={(props) => <Products {...props} cart={cart} setCart={setCart}  setPrice={setPrice} products={products} />}
      />

<Route
        exact
        path="/cart"
        render={(props) => <Cart {...props} addToCart={addToCart} updateCart={updateCart} cart={cart} setCart={setCart} setItemRecipient={setItemRecipient}  />}
      />

<Route
        exact
        path="/recipient"
        render={(props) => <Recipient {...props} cart={cart} itemRecipient={itemRecipient}  />}
      />
<Route
        exact
        path="/finalcheckOut"
        render={(props) => <Finalcheck {...props} cart={cart} itemRecipient={itemRecipient}  />}
      />

    </div>
  );
}

export default App;
