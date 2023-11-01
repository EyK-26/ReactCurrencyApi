import React, { useContext } from "react";
import Context from "../context/Context";

export const CartItem = ({ title, price, image }) => {
  const { state } = useContext(Context);

  return (
    <div className="cart-detail">
      <h2>{title}</h2>
      <p>
        {(price * state.exchangeRate).toFixed(2)} {state.currency}
      </p>
      <img src={image} alt={title} />
    </div>
  );
};
