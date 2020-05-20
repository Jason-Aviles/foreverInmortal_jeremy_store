import React, { Component } from "react";
import { Link } from "react-router-dom";

import img from "../img/foreverin.png";

import { Codes } from "./utils/countryCodes";

class recipient extends Component {
  state = {
    name: "",
    address1: "",
    city: "",
    state_code: "",
    country_code: "",
    zip: "",
    country: [],
    email: "",
    items: [],
  };

  countryFetch = (props) => {
    Codes()
      .get("/countries")
      .then((country) =>
        this.setState({
          country: country.data.result,
        })
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.countryFetch();
    this.setState({ files: [...this.props.cart] });
  }
  handleSelectChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  stateSelectChange = (event) => {
    this.setState({
      state_code: event.target.value,
    });
  };

  countrySelectChange = (event) => {
    this.setState({
      country_code: event.target.value,
    });
  };



  printfulOBj = () => {
    let checkCart = JSON.parse(localStorage.getItem("checkCart"));
    let recipientofBuyer = {
      recipient: {
        name: this.state.name,
        address1: this.state.address1,
        city: this.state.city,
        state_code: this.state.state_code,
        country_code: this.state.country_code,
        zip: this.state.zip,

        email: this.state.email,
      },
      items: [...checkCart],
    };

    return recipientofBuyer;
  };

  onhandleSubmit = (e) => {
    e.preventDefault();
    this.fetchShipping(this.printfulOBj());
    this.fetchTaxes(this.printfulOBj());
  };

  render() {
    console.log(this.printfulOBj());
    let checkCart = JSON.parse(localStorage.getItem("checkCart"));
    return !checkCart.length || !this.props.cart.length ? (
      <h1>no items in the shopping cart</h1>
    ) : (
      <div className="recipient">
        {/* {
checkCart.map(data => <div className="recipient__content">
<h2 className="recipient__title">{data.name}</h2>
<h3 className="recipient__title">{data.quantity}</h3>
<h3 className="recipient__title">{data.total}</h3>
</div>)

  } */}
        <div className="recipient__content">
          <img className="recipient__img" alt="d" src={img} />
        </div>

        <form className="form" onSubmit={this.onhandleSubmit}>
          <h1>Shipping Information:</h1>

          <label className="form__label">
            <h4 className="form__title"> name:</h4>
            <input
              className="form__input"
              onChange={this.handleSelectChange}
              name="name"
              value={this.state.name}
              placeholder="name"
              required
            />
          </label>

          <label className="form__label">
            <h4 className="form__title"> address:</h4>
            <input
              className="form__input"
              onChange={this.handleSelectChange}
              name="address1"
              value={this.state.address1}
              placeholder="address"
              required
            />
          </label>

          <label className="form__label">
            <h4 className="form__title"> city:</h4>
            <input
              className="form__input"
              onChange={this.handleSelectChange}
              name="city"
              value={this.state.city}
              placeholder="city"
              required
            />
          </label>

          <label className="form__label">
            <h4 className="form__title"> zipcode:</h4>
            <input
              className="form__input"
              onChange={this.handleSelectChange}
              name="zip"
              value={this.state.zip}
              placeholder="zipcode"
              required
            />
          </label>

          <label className="form__label">
            <h4 className="form__title"> email:</h4>
            <input
              className="form__input"
              onChange={this.handleSelectChange}
              name="email"
              value={this.state.email}
              placeholder="email"
              required
            />
          </label>

          <label className="form__label">
            <h4 className="form__title"> country: </h4>
            <select
              required
              className="form__input"
              onChange={this.countrySelectChange}
            >
              {this.state.country.map((state, i) => (
                <>
                  <option key={i} name="country" value={state.code}>
                    {state.name}
                  </option>
                </>
              ))}
            </select>
          </label>

          <label className="form__label">
            <h4 className="form__title"> state:</h4>
            <select
              required
              className="form__input"
              onChange={this.stateSelectChange}
            >
              {this.state.country.map((state, i) => (
                <>
                  {state.states &&
                    state.states.map((nj, l) => (
                      <option key={l} name="state_code" value={nj.code}>
                        {nj.name}
                      </option>
                    ))}
                </>
              ))}
            </select>
          </label>
      <Link to="/finalcheckOut">   <button  onClick={ ()=>localStorage.setItem('finalOrder', JSON.stringify(  this.printfulOBj()))}>confirm</button></Link> 
        </form>
      </div>
    );
  }
}

export default recipient;
