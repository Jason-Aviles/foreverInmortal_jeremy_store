import React, { useState, useEffect } from "react";
import { UserContext } from "./context/UsetContext";
import { API } from "./utils/index";
import shoppingcart from "../img/cart.png";
const Products = (props) => {
  const [products, setProducts] = useState([]);
const [shirtColor,setShirtColor]  = useState("Black")
const [shirtSize,setShirtSize]  = useState("S")
console.log(shirtSize)
  const fetchProducts = () => {
    API()
      .get(`/products/${props.match.params.id}`)
      .then((data) => setProducts(data.data.result.sync_variants))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchProducts(), []);
  // console.log(products.map(items => items.name),"jjj")
  // console.log(products.map(item =>  item.files.map((info ,i)=> info)[2].thumbnail_url).map((y,i) => y),'tt')
  console.log(
    products
      .filter((items) => items.name.match("- S") && items)
      .map((info) => info.files)
      .map((img) => img[2]),
    "data"
  );
  // console.log(products.filter(items => items.name.match('/ XS')),'XS')
  // console.log(products.filter(items => items.name.match('/ S')),'S')
  // console.log(products.filter(items => items.name.match('/ M')),'M')
  // console.log(products.filter(items => items.name.match('/ L')),'L')
  // console.log(products.filter(items => items.name.match('/ XL')),'XL')
  // console.log(products.filter(items => items.name.match('/ XL')),'XL')
const checkColor= (check)=>{

if(products.filter(items => items.name.match(check)).length > 0) return check
else{return ""}
}
  
const checkBlack = ()=>{  if(products.filter(items => items.name.match("Black")).length < 0) return setShirtColor("Crop")
 }


  console.log(shirtColor,"color")
  return (
    <div style={{ display: "block" }} className="product">
    
      {products
        .filter(
          (items) =>
            items.name.match(`${shirtColor} / ${shirtSize}`) ||
            (items.name.match(`${shirtColor} - ${shirtSize}`) && items)
        )
        .map((info, i) => (
          <div className="product__container" key={i}>
            <div className="product__right">
              <div className="product__header">
                <h2 className="product__title">{info.name}</h2>
                <h3 className="product__price">$30.00</h3>
              </div>

              <div className="product__color--box">
                <h2 className="product__color--title">Color</h2>
                <div className="product__color">
                  <div  onClick={()=>setShirtColor("Red")} className={ checkColor('Red') ? `product__color--red` : 'u-no-display'}></div>
                  <div onClick={()=>setShirtColor("Black")}   className={ checkColor('Black') ?    "product__color--black" : 'u-no-display'}></div>
                <div   onClick={()=>setShirtColor("Athletic Heather")}   className={  checkColor('Athletic Heather') ?   "product__color--Athletic-Heather" : 'u-no-display' }     ></div>
                  <div  onClick={()=>setShirtColor("Gold")} className={ checkColor('Gold') ?     "product__color--Gold" : 'u-no-display'}    ></div>
                  <div  onClick={()=>setShirtColor("Lilac")} className={ checkColor('Lilac') ?    "product__color--Lilac" : 'u-no-display' }  ></div>
                  <div  onClick={()=>setShirtColor("navy")} className={checkColor('navy') ? "product__color--navy" : 'u-no-display'}   ></div>
                  <div  onClick={()=>setShirtColor("Black Heather")} className={checkColor('Black Heather') ?   "product__color--Black-Heather" : 'u-no-display'}   ></div>
                  <div onClick={()=>setShirtColor("Maroon")}  className={checkColor('Maroon') ? "product__color--Maroon" : 'u-no-display'}    ></div>

                  <div onClick={()=>setShirtColor("Military Green")} className={checkColor('Military Green') ? "product__color--Military-Green"  : 'u-no-display'}></div>
                  <div onClick={()=>setShirtColor("White")} className={checkColor('White') ? "product__color--white"  : 'u-no-display'}></div>
                  <div onClick={()=>setShirtColor("Crop")} className={checkColor('Crop') ?"product__color--crop" : 'u-no-display'}></div>

                </div>
              </div>



              <div className="product__color--box">
<h2 className="product__color--title">Size</h2>
<div className="product__color">
  <div  onClick={()=>setShirtSize("S")}  className="product__sizeBox">S</div>
  <div  onClick={()=>setShirtSize("M")} className="product__sizeBox">M</div>
  <div  onClick={()=>setShirtSize("L")} className="product__sizeBox">L</div>
  <div  onClick={()=>setShirtSize("XL")} className="product__sizeBox">XL</div>
</div>
</div>

<div className="addCArt">
<a href="#" className="addCArt__Btn"><img className="addCArt__logo"  src={shoppingcart} alt="b"/>add to cart</a></div>

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
        { console.log(checkBlack(),"check this") }
    </div>
  );
};

export default Products;
