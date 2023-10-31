import React, { useContext } from "react";
import Context from "./context/Context";

export const LanguageSelect = () => {
  const { contextValue, setContextValue } = useContext(Context);
  return (
    <div>
      <span
        onClick={() => {
          setContextValue({ ...contextValue, language: "en" });
          localStorage.removeItem("language");
          localStorage.setItem("language", contextValue.language);
        }}
      >
        EN
      </span>
      <br />
      <span
        onClick={() => {
          setContextValue({ ...contextValue, language: "cz" });
          localStorage.removeItem("language");
          localStorage.setItem("language", contextValue.language);
        }}
      >
        CZ
      </span>
      <br />
      Selected Language: {contextValue.language}
    </div>
  );
};
