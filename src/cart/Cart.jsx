import React, { useContext } from "react";
import Context from "../context/Context";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { state } = useContext(Context);
  const { shoppingCart } = state;

  return shoppingCart.map((el) => <CartItem key={el.id} {...el} />);
};
