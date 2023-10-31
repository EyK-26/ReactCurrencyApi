import React, { useContext, useEffect, useState } from "react";
import Context from "./context/Context";

export const CurrencySelect = () => {
  const { state, dispatch } = useContext(Context);
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
    dispatch({
      type: "exchangeRate/set",
      payload: response.rate,
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: "currency/set",
      payload: e.target.value,
    });
  };

  useEffect(() => {
    loadCurrencies();
  }, []);

  useEffect(() => {
    loadExchangeRate(state.currency);
    localStorage.setItem("currency", state.currency);
    localStorage.setItem("exchangeRate", state.exchangeRate);
  }, [state.currency, state.exchangeRate]);

  return (
    <>
      <p>Current Exchange Rate: {state.exchangeRate} compared to Eur</p>
      <select
        name="currency"
        id="currency"
        value={state.currency}
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
