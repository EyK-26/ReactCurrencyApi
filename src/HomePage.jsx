import React from "react";
import { useEffect, useState } from "react";
import Book from "./Book";
import { BookList } from "./BookList";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import CurrencyContext from "./context/CurrencyContext";
import { useContext } from "react";

export const HomePage = () => {
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "EUR"
  );
  const [exchangeRate, setExchangeRate] = useState(1);
  const [data, setData] = useState(null);
  // const [currencyName, setCurrencyName] = useState(
  //   // localStorage.getItem("currency") || "EUR"
  // );
  // const [convertedPrice, setConvertedPrice] = useState(1);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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
    <CurrencyContext.Provider
      value={{ currency, setCurrency, exchangeRate, setExchangeRate }}
    >
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        burger
      </button>
      {isOpen && (
        <Header
        // currencyName={currencyName}
        // setCurrencyName={setCurrencyName}
        // convertedPrice={convertedPrice}
        // setConvertedPrice={setConvertedPrice}
        />
      )}
      <MainContent
        // currencyName={currencyName}
        // convertedPrice={convertedPrice}
        page={page}
        setPage={setPage}
        data={data}
      />
    </CurrencyContext.Provider>
  );
};
