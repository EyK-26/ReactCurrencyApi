import React, { useEffect, useState } from "react";

export const CurrencySelect = () => {
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "EUR"
  );
  const [currencyList, setCurrencyList] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);

  const loadCurrencies = async () => {
    const data = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const response = await data.json();
    setCurrencyList(response);
  };

  const loadExchangeRate = async (currency) => {
    const data = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=${currency}`
    );
    const response = await data.json();
    console.log(response);
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
