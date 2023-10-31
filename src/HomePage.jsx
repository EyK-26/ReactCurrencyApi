import React from "react";
import { useEffect, useState } from "react";
import Book from "./Book";
import { BookList } from "./BookList";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const HomePage = () => {
  const [data, setData] = useState(null);
  const [currencyName, setCurrencyName] = useState(
    localStorage.getItem("currency") || "EUR"
  );
  const [convertedPrice, setConvertedPrice] = useState(1);
  const [page, setPage] = useState(1);

  const loadData = async () => {
    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${page}`
    );
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <>
      <Header
        currencyName={currencyName}
        setCurrencyName={setCurrencyName}
        convertedPrice={convertedPrice}
        setConvertedPrice={setConvertedPrice}
      />
      <MainContent
        currencyName={currencyName}
        convertedPrice={convertedPrice}
        page={page}
        setPage={setPage}
        data={data}
      />
    </>
  );
};
