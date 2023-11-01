import React, { useContext } from "react";
import Context from "../context/Context";

export const CartItem = ({ id, title, price, image }) => {
  const { state, dispatch } = useContext(Context);

  const handleClick = (bookId) => {
    dispatch({
      type: "shoppingCart/remove",
      payload: id,
    });
  };

  return (
    <div className="cart-detail">
      <h2>{title}</h2>
      <p>
        {(price * state.exchangeRate).toFixed(2)} {state.currency}
      </p>
      <img src={image} alt={title} />
      <button onClick={(id) => handleClick(id)}>Remove from Cart</button>
    </div>
  );
};
