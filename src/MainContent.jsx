import React from "react";
import { BookList } from "./BookList";

export const MainContent = ({
  convertedPrice,
  data,
  currencyName,
  page,
  setPage,
}) => {
  return (
    <>
      <h1>Latest books</h1>
      <BookList
        convertedPrice={convertedPrice}
        data={data}
        currencyName={currencyName}
      />
      {page > 1 && (
        <button
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>
      )}
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </>
  );
};
