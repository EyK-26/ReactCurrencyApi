import { Authors } from "./Authors";

export default function Book({
  title,
  price,
  authors,
  publication_date,
  currencyName,
  convertedPrice,
}) {
  return (
    <li>
      <h2>{title}</h2>
      <small>
        original price in EUR {price}
        <br />
        {(price * convertedPrice).toFixed(2)} {currencyName}
      </small>
      <Authors authors={authors} />
      <small>{publication_date}</small>
    </li>
  );
}
