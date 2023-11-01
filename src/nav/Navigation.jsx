import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/about">About us</Link> <Link to="/contact">Contact us</Link>
        <Link to="/books">List of Books</Link>
      </nav>
    </>
  );
};
