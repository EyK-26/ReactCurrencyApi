import React from "react";
import { CurrencySelect } from "./CurrencySelect";

export const Header = ({
  currencyName,
  setCurrencyName,
  convertedPrice,
  setConvertedPrice,
}) => {
  return (
    <header>
      <CurrencySelect
        currencyName={currencyName}
        setCurrencyName={setCurrencyName}
        convertedPrice={convertedPrice}
        setConvertedPrice={setConvertedPrice}
      />
    </header>
  );
};
