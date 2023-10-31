import { Authors } from "./Authors";

export default function Book({ title, price, authors, publication_date }) {
  return (
    <li>
      <h2>{title}</h2>
      <small>{price}</small>
      <Authors authors={authors} />
      <small>{publication_date}</small>
    </li>
  );
}
