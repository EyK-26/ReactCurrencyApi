import React, { useReducer, useEffect, useState } from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import Context from "./context/Context";
import reducer from "./store/reducer";

export const HomePage = () => {
  const [contextValue, setContextValue] = useReducer(reducer, {
    user: null,
    theme: "light",
    language: localStorage.getItem("language") || "en",
    currency: localStorage.getItem("currency") || "EUR",
    exchangeRate: localStorage.getItem("exchangeRate") || 1,
    authHash: null,
    shoppingCart: [],
  });

  const [data, setData] = useState(null);
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
    <Context.Provider
      value={{ state: contextValue, dispatch: setContextValue }}
    >
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Toggle
      </button>
      {isOpen && <Header />}
      <MainContent page={page} setPage={setPage} data={data} />
    </Context.Provider>
  );
};
