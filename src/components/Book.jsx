import { useContext, useState } from "react";
import { Authors } from "./Authors";
import Context from "../context/Context";
import { Link, Route, Routes, useLocation } from "react-router-dom";

export const Book = ({ id, title, price, authors, publication_date }) => {
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
    </li>
  );
};
