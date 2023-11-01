import { useContext } from "react";
import Context from "../context/Context";

export const Button = (props) => {
  const { id, title, price, image } = props.book;
  const isAdded = props.isAdded || null;
  const { dispatch } = useContext(Context);

  const handleClick = () => {
    if (isAdded) {
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
      <button onClick={handleClick}>{isAdded ? "Remove" : "Add"}</button>
    </>
  );
};
