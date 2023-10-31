import React, { useContext, useEffect, useState } from "react";
import Context from "./context/Context";

export const CurrencySelect = () => {
  const { contextValue, setContextValue } = useContext(Context);
  const [currencyList, setCurrencyList] = useState([]);

  const loadCurrencies = async () => {
    const data = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const response = await data.json();
    setCurrencyList(response);
  };

  const loadExchangeRate = async (val) => {
    const data = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=${val}`
    );
    const response = await data.json();
    setContextValue({ ...contextValue, exchangeRate: response.rate });
  };

  const handleChange = (e) => {
    setContextValue({ ...contextValue, currency: e.target.value });
  };

  useEffect(() => {
    loadCurrencies();
  }, []);

  useEffect(() => {
    loadExchangeRate(contextValue.currency);
    localStorage.setItem("currency", contextValue.currency);
  }, [contextValue.currency]);

  return (
    <>
      <p>Current Exchange Rate: {contextValue.exchangeRate} compared to Eur</p>
      <select
        name="currency"
        id="currency"
        value={contextValue.currency}
        onChange={handleChange}
      >
        {currencyList.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
};
