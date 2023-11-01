import { CurrencySelect } from "../components/CurrencySelect";
import { LanguageSelect } from "../components/LanguageSelect";
import { Navigation } from "../nav/Navigation";
import { CartOverview } from "../components/CartOverview";

import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <Navigation />
      <div className="details">
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          {!isMenuOpen ? "Open Details Menu" : "Close Details Menu"}
        </button>

        {isMenuOpen && (
          <header>
            <LanguageSelect />
            <CurrencySelect />
            <CartOverview />
          </header>
        )}
      </div>
    </div>
  );
};
