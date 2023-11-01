import { useContext } from "react";
import Context from "./context/Context";

export const CartOverview = () => {
  const { state } = useContext(Context);
  return (
    <div>
      items in cart:
      {state.shoppingCart.length}
    </div>
  );
};
