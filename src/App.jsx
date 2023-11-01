import { useReducer } from "react";
import { HomePage } from "./home/HomePage";
import { Header } from "./header/Header";
import reducer from "./store/reducer";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./about/AboutUs";
import { Contact } from "./contact/Contact";
import { BookDetail } from "./details/BookDetail";
import { MainContent } from "./components/MainContent";
import { Layout } from "./Layout/Layout";
import { Cart } from "./cart/Cart";

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
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/books" element={<MainContent />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element="page not found" />
            </Route>
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
