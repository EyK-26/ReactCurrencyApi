import { useContext } from "react";
import { Authors } from "./Authors";
import Context from "./context/Context";

export const Book = ({ title, price, authors, publication_date }) => {
  const { state } = useContext(Context);
  return (
    <li>
      <h2>{title}</h2>
      <small>
        original price in EUR {price}
        <br />
        {(price * state.exchangeRate).toFixed(2)} {state.currency}
      </small>
      <Authors authors={authors} />
      <small>{publication_date}</small>
    </li>
  );
};
