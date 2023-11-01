import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const { pathname: location } = useLocation();

  return (
    <>
      <nav>
        <Link
          to="/"
          className={"link" + (location === "/" ? " link--highlighted" : "")}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={
            "link" + (location === "/about" ? " link--highlighted" : "")
          }
        >
          About us
        </Link>
        <Link
          to="/contact"
          className={
            "link" + (location === "/contact" ? " link--highlighted" : "")
          }
        >
          Contact us
        </Link>
        <Link
          to="/books"
          className={
            "link" + (location === "/books" ? " link--highlighted" : "")
          }
        >
          List of Books
        </Link>
      </nav>
    </>
  );
};
