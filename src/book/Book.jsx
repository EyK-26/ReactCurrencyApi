import { useContext, useState } from "react";
import { Authors } from "../Author/Authors";
import Context from "../context/Context";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Book = (props) => {
  const { id, title, price, authors, publication_date, image } = props.book;
  const { state } = useContext(Context);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

  return (
    <li>
      <h2>{title}</h2>
      <small>
        original price in EUR {price}
        <br />
        {(price * state.exchangeRate).toFixed(2)} {state.currency}
      </small>
      <img style={{ width: "15%" }} src={image} alt={title} />

      <br />
      <small>{publication_date}</small>
      <br />
      <span
        onClick={() => {
          setIsAuthorsOpen((prev) => !prev);
        }}
      >
        More on Author(s) {isAuthorsOpen ? "-" : "+"}
      </span>
      {isAuthorsOpen && <Authors authors={authors} />}
      <Link to={"/book/" + id}>More on This Book</Link>
      <Button
        book={props.book}
        isAdded={state.shoppingCart.find((el) => el.id === id)}
      />
      <hr />
    </li>
  );
};
