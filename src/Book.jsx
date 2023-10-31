import { useContext } from "react";
import { Authors } from "./Authors";
import CurrencyContext from "./context/CurrencyContext";

export default function Book({
  title,
  price,
  authors,
  publication_date,
  // currencyName,
  // convertedPrice,
}) {
  const { currency, exchangeRate } = useContext(CurrencyContext);
  return (
    <li>
      <h2>{title}</h2>
      <small>
        original price in EUR {price}
        <br />
        {(price * exchangeRate).toFixed(2)} {currency}
      </small>
      <Authors authors={authors} />
      <small>{publication_date}</small>
    </li>
  );
}
