import React, { useState } from "react";
import {Link} from "react-router-dom"

const Men = (props) => {




const Women=()=>props.products.filter(data => data.name.match("Women") && data)
const Kids=()=>props.products.filter(data => data.name.match("Kids") && data)
const Acc=()=>props.products.filter(data => !data.name.match("Kids") && !data.name.match("Women") && !data.name.match("Men")   ? data : "")

  const [cart, setCart] = useState([]);

const [mensFilter,setFilter] = useState("")

const Mens=()=>props.products.filter(data =>{ 
  if(mensFilter === ""){
    return data.name.match("Men") && data
  };
  if(mensFilter === "Hoodie"){
    return data.name.match("Hoodie") && data.name.match("Men") && data

  }
  if(mensFilter === "Tee"){
    return !data.name.match("Hoodie") && data.name.match("Men") && data

  }
  })


  console.log(Mens(),"jj")




  const [menuFilter,setMenuFilter] = useState("")




  return (
    <div className="product-container">
     <div className="cloths-menu">
     <ul className="cloths-menu__list">

     

<li className="cloths-menu__item">shop</li>
<li className={`cloths-menu__item    cloths-menu__item${mensFilter === 'Tee' ? '--1' : "" }`} onClick={()=>setFilter('Tee')}>   graphic tee </li>
<li className="cloths-menu__item">  



longsleeve</li>
<li onClick={()=>setFilter('Hoodie')} className={`cloths-menu__item    cloths-menu__item${mensFilter === 'Hoodie' ? '--1' : "" }`}>

hoodie</li>

     </ul>
      
     </div>
<div className="product-list">


{Mens().map((item,i) => 


<div key={i}  className="product-list__box">

<img src={item.thumbnail_url} alt="bb" className="product-list__img"/>
<span className="product-list__title">{item.name}</span>
  <span className="product-list__price">30$</span>
</div>

)}















</div>


    </div>
  );
};

export default Men;