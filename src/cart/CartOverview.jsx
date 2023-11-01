import { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

export const CartOverview = () => {
  const { state } = useContext(Context);
  return (
    <Link to="/cart">
      items in cart:
      {state.shoppingCart.length}
    </Link>
  );
};
