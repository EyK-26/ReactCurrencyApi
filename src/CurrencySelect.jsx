import React, { useEffect, useState } from "react";

export const CurrencySelect = ({
  currencyName,
  setCurrencyName,
  convertedPrice,
  setConvertedPrice,
}) => {
  const [currencyList, setCurrencyList] = useState([]);

  const loadCurrencies = async () => {
    const data = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const response = await data.json();
    setCurrencyList(response);
  };

  const loadExchangeRate = async (currencyName) => {
    const data = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=${currencyName}`
    );
    const response = await data.json();
    console.log(response);
    setConvertedPrice(response.rate);
  };

  const handleChange = (e) => {
    setCurrencyName(e.target.value);
  };

  useEffect(() => {
    loadCurrencies();
  }, []);

  useEffect(() => {
    loadExchangeRate(currencyName);
    localStorage.setItem("currency", currencyName);
  }, [currencyName]);

  return (
    <>
      <p>Current Exchange Rate: {convertedPrice} compared to Eur</p>
      <select
        name="currency"
        id="currency"
        value={currencyName}
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
