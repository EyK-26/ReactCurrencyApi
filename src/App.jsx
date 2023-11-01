import { useReducer } from "react";
import { HomePage } from "./home/HomePage";
import { Header } from "./header/Header";
import reducer from "./store/reducer";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./about/AboutUs";
import { Contact } from "./contact/Contact";
import { MainContent } from "./components/MainContent";

function App() {
  const [contextValue, setContextValue] = useReducer(reducer, {
    user: null,
    theme: "light",
    language: localStorage.getItem("language") || "en",
    currency: localStorage.getItem("currency") || "EUR",
    exchangeRate: localStorage.getItem("exchangeRate") || 1,
    authHash: null,
    shoppingCart: [],
  });

  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{ state: contextValue, dispatch: setContextValue }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<MainContent />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
