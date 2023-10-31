import React, { useContext, useEffect, useState } from "react";
import CurrencyContext from "./context/CurrencyContext";

export const CurrencySelect = ({
  currencyName,
  setCurrencyName,
  convertedPrice,
  setConvertedPrice,
}) => {
  const { currency, setCurrency, exchangeRate, setExchangeRate } =
    useContext(CurrencyContext);
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
    setExchangeRate(response.rate);
  };

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    loadCurrencies();
  }, []);

  useEffect(() => {
    loadExchangeRate(currency);
    localStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <>
      <p>Current Exchange Rate: {exchangeRate} compared to Eur</p>
      <select
        name="currency"
        id="currency"
        value={currency}
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
