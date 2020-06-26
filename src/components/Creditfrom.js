import React,{useState,useEffect} from "react";
import axios from "axios"
import { Codes } from "./utils/countryCodes";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Cards from "./CardElemnt"
require("dotenv").config();


const Creditfrom = (props) => {
const stripeMoney =props.finalPrice() * 100

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [amount, setAmount] = useState();
  const [city, setCity] = useState("");

useEffect(()=>{return setAmount( props.finalPrice() && (props.finalPrice() * 100))})


  const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: 'black',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: '#fce883'},
        '::placeholder': {color: '#87bbfd'},
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  };


  const createOrder = async (product) => {
if(charge === 200) return;

        try {
const res =await  Codes()
        .post("/orders", product)
        
         console.log(res) 
         setCharge(res.status)
        } catch (error) {
          console.log(error)
        }
    };



const [status ,setStatus] = useState()
const [charge ,setCharge] = useState(false)
  const stripe = useStripe();
  const elements = useElements();

  let final= JSON.parse(localStorage.getItem("finalOrder"));


  let finalOrderee = JSON.parse(localStorage.getItem("axiosOrder"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.setAttribute("disabled", true);
    document.getElementById("btn").textContent = "Loading..."
    if (!stripe || !elements || charge === 200) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    
    const cardElement = elements.getElement(CardElement);
    let final= JSON.parse(localStorage.getItem("finalOrder"));
   
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        address: {
          city: city,
         

          state: state,
        },
        name: name,
        email:email,
      },
    });

    if (error) {
      console.log(error.message,"error")
      return setStatus(error.message)
    } else {
     const {id} = paymentMethod
   
try {
   
  createOrder(finalOrderee)
  const {data} = await axios.post(process.env.REACT_APP_charge,{id:id, amount:amount})
 console.log(data,"heremm")
 
props.success()
if(data){localStorage.removeItem("checkCart")

localStorage.clear()
localStorage.removeItem("shoppingCart")
localStorage.removeItem("finalOrder")
props.setCart([])
localStorage.clear()}

} catch (error) {
  console.log(error.message,"error")
  return setStatus(error.message)
}


    }
    
  };
  let finalOrder = JSON.parse(localStorage.getItem("finalOrder"));
console.log(props.charge,"jjjjjj")

  return ( 
    <form className="form-credit" onSubmit={ handleSubmit }><h1 className="finalCheck__header--sub">Enter Credit Card</h1>
    <div className="form-credit__buyer">
    <div className="form-credit__input-container">
    
     <input className="form-credit__input"
     placeholder="Name"
          type="text"
          value={name}
          onChange={e => {setName(e.target.value)}}
        />
          <input className="form-credit__input"
     placeholder="City"
          type="text"
          value={city}
          onChange={e => {setCity(e.target.value)}}
        /></div>
<div className="form-credit__input-container">
<input className="form-credit__input"
     placeholder="State"
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}
        />


<input className="form-credit__input"
     placeholder="Email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /></div>
        
        </div>
      <CardElement style={{width:"50%", margin:"2rem",display:"block",background:"white"}}  options={CARD_OPTIONS} />
      {/* <Cards style={{width:"50%"}}  options={CARD_OPTIONS}/> */}
     {<button id="btn"  className="btn" type="submit" disabled={!stripe } >
        Confirm order
      </button>  }
      {status}
    </form>
  );
};

export default Creditfrom;
