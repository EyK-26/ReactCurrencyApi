import { useReducer } from "react";
import { Header } from "./header/Header";
import reducer from "./store/reducer";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import { Router } from "./router/Router";

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
          <Router />
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
