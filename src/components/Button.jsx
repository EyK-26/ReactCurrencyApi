import { useContext, useState } from "react";
import Context from "../context/Context";

export const Button = (book) => {
  const { dispatch } = useContext(Context);
  const [inCart, setInCart] = useState(false);
  const { id, title, price, image } = book;

  const handleClick = () => {
    setInCart((prev) => !prev);

    if (inCart) {
      dispatch({
        type: "shoppingCart/remove",
        payload: id,
      });
    } else {
      dispatch({
        type: "shoppingCart/add",
        payload: { id, title, price, image },
      });
    }
  };

  return (
    <>
      <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </>
  );
};
