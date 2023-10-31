import React from "react";
import Book from "./Book";

export const BookList = ({
  data,
  // currencyName,
  // convertedPrice,
}) => {
  return (
    <ul className="latest-books">
      {data === null ? (
        <div className="loading">Loading...</div>
      ) : (
        data.map((book) => (
          <Book
            key={book.id}
            {...book}
            // currencyName={currencyName}
            // convertedPrice={convertedPrice}
          />
        ))
      )}
    </ul>
  );
};
