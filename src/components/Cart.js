import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Recipient from "./Recipient";
const Cart = (props) => {
  const RemoveDuplicates = (array, key) => {
    return array.reduce((arr, item) => {
      //   if (charMap[char]) {
      //     charMap[char]++;
      //   } else {
      //     charMap[char] = 1;
      //   }
      // item.qty =

      const removed = arr.filter((i) => i[key] !== item[key]);
      return [...removed, item];
    }, []);
  };

  const updatedArray = () => {
    // let newObj ={}
    let array = [];

    props.cart.map((info, i) => {
      let newObj = {
        name: info.name,
        files: info.files,
        id: info.id,
        variant_id: info.variant_id,
        retail_price: info.retail_price,
      };

      array.push(newObj);
    });

    return array;
  };

  // console.log(updatedArray(), "ppj");
  // console.log(RemoveDuplicates(props.cart, 'id'));

  //quantity
  const quantityOfArrayOfObjects = Object.values(
    updatedArray().reduce((r, e) => {
      let k = `${e.variant_id}|${e.id}`;
      if (!r[k]) r[k] = { ...e, quantity: 1 };
      else r[k].quantity += 1;
      r[k].total = r[k].quantity * r[k].retail_price;
      return r;
    }, {})
  );

  const sync_variant_id = Object.values(
    updatedArray().reduce((r, e) => {
      let k = `${e.id}`;
      if (!r[k]) r[k] = { sync_variant_id: e.id, quantity: 1 };
      else r[k].quantity += 1;

      return r;
    }, {})
  );

  const createOfArrayOrder = Object.values(
    updatedArray().reduce((r, e) => {
      let k = `${e.id}`;
      if (!r[k]) r[k] = { id: e.id, quantity: 1 };
      else r[k].quantity += 1;

      return r;
    }, {})
  );

  const RemoveItem = (item) => {
    let i = 0;
    let newcart = props.cart;
    while (i < props.cart.length) {
      if (props.cart[i].id === item) {
        newcart.splice(i, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(newcart));
        let oldCart = JSON.parse(localStorage.getItem("shoppingCart"));
        return props.setCart(oldCart);
      }
      i++;
    }
  };

  const IncrementItem = (item) => {
    let i = 0;
    let newcart = props.cart;

    let tempProducts = [...newcart];

    let index = 0;

    while (i < props.cart.length) {
      if (props.cart[i].id === item) {
        index = i;

        localStorage.setItem("shoppingCart", JSON.stringify(newcart));
        let oldCart = JSON.parse(localStorage.getItem("shoppingCart"));

        const product = tempProducts[index];

        // setDetailProducts(tempProducts);
        return props.setCart([...props.cart, product]);
      }
      i++;
    }
  };
  console.log(createOfArrayOrder, "num");

  useEffect(() => props.setItemRecipient(quantityOfArrayOfObjects), []);
  useEffect(() => props.updateCart());
  return !props.cart.length ? (
    <h1>empty cart</h1>
  ) : (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Qty</th>
            <th>Item</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {quantityOfArrayOfObjects.map((cartData, i) => (
            <tr key={i} className="cart__section">
              <td className="cart__detail u_flex">
                <i
                  onClick={() => IncrementItem(cartData.id)}
                  class="fas fa-plus-circle u-point"
                ></i>
                <h3>{cartData.quantity}</h3>
                <i
                  onClick={() => RemoveItem(cartData.id)}
                  class="fas fa-minus-circle u-point"
                ></i>
              </td>
              <td>
                <h4 class="cart__header">
                  <img
                    width="5%"
                    src={
                      cartData.files.map((img, i) => img)[
                        cartData.files.map((img, i) => img).length - 1
                      ].preview_url
                    }
                    class="cart__image"
                  />
                  <div class="cart__content">{cartData.name}</div>
                </h4>
              </td>
              <td className="cart__detail">${cartData.retail_price} </td>
              <td className="cart__detail">${cartData.total} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link style={{margin:"5px"}}  className="addCArt__Btn"
        onClick={() => {
          localStorage.setItem(
            "checkCart",
            JSON.stringify(quantityOfArrayOfObjects)
          );
          localStorage.setItem(
            "checkOrder",
            JSON.stringify(sync_variant_id)
          );
        }}
        to="/recipient"
      >
        CheckOut
      </Link>
    </>
  );
};

export default Cart;
