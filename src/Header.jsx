import { CurrencySelect } from "./CurrencySelect";
import { LanguageSelect } from "./LanguageSelect";
import { CartOverview } from "./CartOverview";

export const Header = () => {
  return (
    <header>
      <LanguageSelect />
      <CurrencySelect />
    </header>
  );
};
