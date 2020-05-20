import React,{useState} from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const Creditfrom = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");


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
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return ( 
    <form className="form-credit" onSubmit={handleSubmit}><h1 className="finalCheck__header--sub">Enter Credit Card</h1>
    <div className="form-credit__buyer">
    <div className="form-credit__input-container">
    
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
      <button className="btn" type="submit" disabled={!stripe}>
        Confirm order
      </button>
    </form>
  );
};

export default Creditfrom;
