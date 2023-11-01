import React, { useContext } from "react";
import Context from "../context/Context";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { state } = useContext(Context);
  const { shoppingCart } = state;

  return shoppingCart.length > 0 ? (
    shoppingCart.map((el) => (
      <div key={el.id}>
        <CartItem {...el} />
        <hr />
      </div>
    ))
  ) : (
    <h3>cart is empty</h3>
  );
};
