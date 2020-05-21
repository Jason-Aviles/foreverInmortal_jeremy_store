import React, { useState, useEffect } from "react";
import { UserContext } from "./context/UsetContext";
import { API } from "./utils/index";
import shoppingcart from "../img/cart.png";
const Products = (props) => {
  
  
  let oldCart=JSON.parse(localStorage.getItem('shoppingCart'))

  const [products, setProducts] = useState([]);
  const [shirtColor, setShirtColor] = useState("Black");
  const [shirtSize, setShirtSize] = useState("S");


  const fetchProducts = async () => {
  //  const res = await  API()
  //     .get(`/products/${props.match.params.id}`)
  //     .then((data) => setProducts(data.data.result.sync_variants))
  //     .catch((err) => console.log(err));
     const res = await  API()
      .get(`/products/${props.match.params.id}`)
      
      
      try {
 setProducts(res.data.result.sync_variants)


      } catch (err) {
        console.log(err)
      }
      
  };

const updateCart = cart=>{ 


    
 if( !JSON.parse(localStorage.getItem('shoppingCart')) || cart.length > oldCart.length ){
 return localStorage.setItem('shoppingCart', JSON.stringify( cart)) 
 }

 
  if(  cart.length >0 && !JSON.parse(localStorage.getItem('shoppingCart')) ){
 return  localStorage.setItem('shoppingCart', JSON.stringify( cart))
 }


}

useEffect(()=>{updateCart(props.cart)})
  useEffect(() => {  fetchProducts()}, []);
  // console.log(products.map(items => items.name),"jjj")
  // console.log(products.map(item =>  item.files.map((info ,i)=> info)[2].thumbnail_url).map((y,i) => y),'tt')

  // console.log(products.filter(items => items.name.match('/ XS')),'XS')
  // console.log(products.filter(items => items.name.match('/ S')),'S')
  // console.log(products.filter(items => items.name.match('/ M')),'M')
  // console.log(products.filter(items => items.name.match('/ L')),'L')
  // console.log(products.filter(items => items.name.match('/ XL')),'XL')
  // console.log(products.filter(items => items.name.match('/ XL')),'XL')

  //  localStorageProduct.length < cart && setCart(localStorageProduct)

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
 

  //  cart.length >0 &&  getCart

  const checkColor = (check) => {
    if (products.filter((items) => items.name.match(check)).length > 0)
      return check;
    else {
      return "";
    }
  };
  


console.log(JSON.parse(localStorage.getItem('shoppingCart')),"carttt")






  return (
    <div style={{ display: "block" }} className="product">
      {products
        .filter(
          (items) =>
            items.name.match(`${shirtColor} / ${shirtSize}`) ||
            (items.name.match(`${shirtColor} - ${shirtSize}`)    && items)
        )
        .map((info, i) => (
          <div className="product__container" key={i}>
            <div className="product__right">
              <div className="product__header">
                <h2 className="product__title">{info.name}</h2>
                <h3 className="product__price">${info.retail_price}</h3>
              </div>

              <div className="product__color--box">
                <h2 className="product__color--title">Color</h2>
                <div className="product__color">
                  <div
                    onClick={() => setShirtColor("Red")}
                    className={
                      checkColor("Red") ? `product__color--red` : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Black")}
                    className={
                      checkColor("Black")
                        ? "product__color--black"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Athletic Heather")}
                    className={
                      checkColor("Athletic Heather")
                        ? "product__color--Athletic-Heather"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Gold")}
                    className={
                      checkColor("Gold")
                        ? "product__color--Gold"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Lilac")}
                    className={
                      checkColor("Lilac")
                        ? "product__color--Lilac"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("navy")}
                    className={
                      checkColor("navy")
                        ? "product__color--navy"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Black Heather")}
                    className={
                      checkColor("Black Heather")
                        ? "product__color--Black-Heather"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Maroon")}
                    className={
                      checkColor("Maroon")
                        ? "product__color--Maroon"
                        : "u-no-display"
                    }
                  ></div>

                  <div
                    onClick={() => setShirtColor("Military Green")}
                    className={
                      checkColor("Military Green")
                        ? "product__color--Military-Green"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("White")}
                    className={
                      checkColor("White")
                        ? "product__color--white"
                        : "u-no-display"
                    }
                  ></div>
                  <div
                    onClick={() => setShirtColor("Peach")}
                    className={
                      checkColor("Peach")
                        ? "product__color--crop"
                        : "u-no-display"
                    }
                  ></div>


<div
                    onClick={() => setShirtColor("Jet Black")}
                    className={
                      checkColor("Jet Black")
                        ? "product__color--jetBlack"
                        : "u-no-display"
                    }
                  ></div>



<div
                    onClick={() => setShirtColor("Royal Blue")}
                    className={
                      checkColor("Royal Blue")
                        ? "product__color--royalBlue"
                        : "u-no-display"
                    }
                  ></div>




<div
                    onClick={() => setShirtColor("Baby Pink")}
                    className={
                      checkColor("Baby Pink")
                        ? "product__color--babyPink"
                        : "u-no-display"
                    }
                  ></div>

<div
                    onClick={() => setShirtColor("Baby Blue")}
                    className={
                      checkColor("Baby Blue")
                        ? "product__color--babyBlue"
                        : "u-no-display"
                    }
                  ></div>

<div
                    onClick={() => setShirtColor("Heather Grey")}
                    className={
                      checkColor("Heather Grey")
                        ? "product__color--heatherGrey"
                        : "u-no-display"
                    }
                  ></div>







                </div>
              </div>

              <div className="product__color--box">
                <h2 className="product__color--title">Size</h2>
                <div className="product__color">
                  <div
                    onClick={() => setShirtSize("S")}
                    className="product__sizeBox"
                  >
                    S
                  </div>
                  <div
                    onClick={() => setShirtSize("M")}
                    className="product__sizeBox"
                  >
                    M
                  </div>
                  <div
                    onClick={() => setShirtSize("L")}
                    className="product__sizeBox"
                  >
                    L
                  </div>
                  <div
                    onClick={() => setShirtSize("XL")}
                    className="product__sizeBox"
                  >
                    XL
                  </div>
                </div>
              </div>

              <div className="addCArt" onClick={() => addToCart(info.id,props.cart,props.setCart)}>
                <a href="#" className="addCArt__Btn">
                  <img className="addCArt__logo" src={shoppingcart} alt="b" />
                  add to cart
                </a>
              </div>
            </div>

            <div className="product__left">
              <img
                className="product__img"
                src={
                  info.files.map((img, i) => img)[
                    info.files.map((img, i) => img).length - 1
                  ].preview_url
                }
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
