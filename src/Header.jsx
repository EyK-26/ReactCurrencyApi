import { CurrencySelect } from "./CurrencySelect";
import { LanguageSelect } from "./LanguageSelect";

export const Header = () => {
  return (
    <header>
      <LanguageSelect />
      <CurrencySelect />
    </header>
  );
};
