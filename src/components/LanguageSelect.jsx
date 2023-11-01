import React, { useContext, useEffect } from "react";
import Context from "../context/Context";

export const LanguageSelect = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    localStorage.setItem("language", state.language);
  }, [state.language]);

  return (
    <div className="language">
      <span
        onClick={() => {
          dispatch({
            type: "language/set",
            payload: "en",
          });
        }}
      >
        EN
      </span>
      <span
        onClick={() => {
          dispatch({
            type: "language/set",
            payload: "cz",
          });
        }}
      >
        CZ
      </span>
      <span> Selected Language: {state.language}</span>
    </div>
  );
};
