import { useContext, useState } from "react";
import Context from "../context/Context";

export const Button = ({ book_id, book_title, book_price }) => {
  const { dispatch } = useContext(Context);
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart((prev) => !prev);

    if (inCart) {
      dispatch({
        type: "shoppingCart/remove",
        payload: book_id,
      });
    } else {
      dispatch({
        type: "shoppingCart/add",
        payload: { book_id, book_title, book_price },
      });
    }
  };

  return (
    <>
      <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </>
  );
};
