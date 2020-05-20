import React, { useEffect, useState } from "react";
import { Codes } from "./utils/countryCodes";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Creditform from "./Creditfrom";
import {
  Elements

} from "@stripe/react-stripe-js";



const Finalcheck = () => {
const stripePromise = loadStripe("pk_test_HgeKWoelTLwO0I4wPrMdNJTk00QoHYOnOG");

  const [shipping, setShipping] = useState([]);
  const [tax, setTax] = useState([]);

  const fetchShipping = (product) => {
    Codes()
      .post("/shipping/rates", product)
      .then((data) => setShipping(data.data.result))
      .catch((err) => console.log(err));
  };

  const fetchTaxes = (product) => {
    Codes()
      .post("/tax/rates", product)
      .then((data) => setTax(data.data.result))
      .catch((err) => console.log(err));
  };

  let finalOrder = JSON.parse(localStorage.getItem("finalOrder"));

  useEffect(() => fetchShipping(finalOrder), []);
  useEffect(() => fetchTaxes(finalOrder), []);

  const totalPrice = () => {
    let i = 0;
    let price = 0;
    while (i < finalOrder.items.length) {
      price += finalOrder.items[i].total;
      i++;
    }
    return price;
  };
  console.log(totalPrice(), "kkk");

  let fullTax = Math.round(tax.rate * totalPrice());
  let fullshipping = shipping.map((ship) => ship.rate);
  let finalPrice =
    Number(fullTax) + Number(fullshipping) + Number(totalPrice());

  console.log(finalPrice, "finalPrice");
  return !finalOrder.recipient.name || !finalPrice || finalPrice === 0 ? (
    <h1>
      Please go back to the previous page and enter your shipping information{" "}
      <Link to="/recipient">Click here</Link>
    </h1>
  ) : (
    <div>
      <div className="final">
        <div className="finalCheck">
          <header className="finalCheck__header">
            <h2 className="finalCheck__header--main">Check Out</h2>
            <h1 className="finalCheck__header--sub">Complete your order</h1>
          </header>
          <div className="finalCheck__contact">
            <h1 className="finalCheck__contact--title">shipping address</h1>
            <div className="finalCheck__contact--info">
              <span className="finalCheck__contact--key total__title--sub">
                name:
              </span>
              <h4 className="finalCheck__contact--value">
                {finalOrder.recipient.name}
              </h4>
            </div>

            <div className="finalCheck__contact--info">
              <span className="finalCheck__contact--key total__title--sub">
                address:
              </span>
              <h4 className="finalCheck__contact--value">
                {finalOrder.recipient.address1}
              </h4>
            </div>

            <div className="finalCheck__contact--info">
              <span className="finalCheck__contact--key total__title--sub">
                city:
              </span>
              <h4 className="finalCheck__contact--value">
                {finalOrder.recipient.city}
              </h4>
            </div>
            <div className="finalCheck__contact--info">
              <span className="finalCheck__contact--key total__title--sub">
                zipcode:
              </span>
              <h4 className="finalCheck__contact--value">
                {finalOrder.recipient.zip}
              </h4>
            </div>
            <div className="finalCheck__contact--info">
              <span className="finalCheck__contact--key total__title--sub">
                state:
              </span>
              <h4 className="finalCheck__contact--value">
                {finalOrder.recipient.state_code}
              </h4>
            </div>

            <div className="finalCheck__contact--info">
              <span className="finalCheck__contact--key total__title--sub">
                email:
              </span>
              <h4 className="finalCheck__contact--value">
                {finalOrder.recipient.email}
              </h4>
            </div>
          </div>
          <div className="finalcredit">
        <Elements stripe={stripePromise}>
          <Creditform

          />
        </Elements>
      </div>
        </div>

        <div className="total">
          <h2 className="finalCheck__header--main">Check Out</h2>
          {finalOrder.items.map((data, i) => (
            <div className="total__detail" key={i}>
              <img
                className="total__img"
                src={
                  data.files.map((img, i) => img)[
                    data.files.map((img, i) => img).length - 1
                  ].preview_url
                }
              />
              <h4 className="total__title">{data.name}</h4>
              <h4 className="total__title">
                <span className="total__title--sub">total:</span>${data.total}
              </h4>
              <h4 className="total__title">
                <span className="total__title--sub">quantity:</span>
                {data.quantity}
              </h4>
            </div>
          ))}
          <div className="shipTotal">
            {shipping.map((ship) => (
              <div className="ship-box">
                <h4 className="total__title u-margin-bottom">
                  <span className="total__title--sub u-margin-bottom">
                    Standard delivery:
                  </span>
                  {!ship.rate ? "Free" : ` $ ${ship.rate}`}
                </h4>

                <h4 className="total__title u-margin-bottom ">
                  <span className="total__title--sub ">tax:</span>
                  {!tax.required ? "Free" : ` $ ${fullTax}`}
                </h4>
              </div>
            ))}

            <h4 className="total__title total-fs">
              <span className="total__title--sub">Total:</span>
              {!finalPrice ? "0" : ` $ ${finalPrice}`}
            </h4>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Finalcheck;
