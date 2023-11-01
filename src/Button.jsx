import { useContext, useState } from "react";
import Context from "./context/Context";

export const Button = ({ id, title, price }) => {
  const { dispatch } = useContext(Context);
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart((prev) => !prev);

    if (inCart) {
      dispatch({
        type: "shoppingCart/remove",
        payload: { id, title, price },
      });
    } else {
      dispatch({
        type: "shoppingCart/add",
        payload: { id, title, price },
      });
    }
  };

  return (
    <>
      <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </>
  );
};
