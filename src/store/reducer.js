export default function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "language/set":
      return {
        ...state,
        language: action.payload,
      };
    case "exchangeRate/set":
      return {
        ...state,
        exchangeRate: action.payload,
      };
    case "currency/set":
      return {
        ...state,
        currency: action.payload,
      };
  }
}
