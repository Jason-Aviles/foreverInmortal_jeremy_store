import React,{useState,useEffect} from "react";
import axios from "axios"
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
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

const [status ,setStatus] = useState()

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);

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
     console.log(id)
try {
  const {data} = await axios.post("http://localhost:7000/api/charge",{id, amount})
props.success()
localStorage.removeItem("checkCart")
localStorage.removeItem("shoppingCart")
localStorage.removeItem("finalOrder")
} catch (error) {
  console.log(error.message,"error")
  return setStatus(error.message)
}


    }
  };

  return ( 
    <form className="form-credit" onSubmit={handleSubmit}><h1 className="finalCheck__header--sub">Enter Credit Card</h1>
    <div className="form-credit__buyer">
    <div className="form-credit__input-container">
    <h1>{ Number(amount)}</h1>
     <input className="form-credit__input"
     placeholder="Name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
          <input className="form-credit__input"
     placeholder="City"
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
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
        /></div></div>
      <CardElement style={{width:"40%"}}  options={CARD_OPTIONS} />
      <button disabled={props.charge} className="btn" type="submit" disabled={!stripe}>
        Confirm order
      </button>
      {status}
    </form>
  );
};

export default Creditfrom;
