export default function reducer(state, action) {
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
    case "shoppingCart/add":
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    case "shoppingCart/remove":
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (book) => book.id !== action.payload.id
        ),
      };
  }
}
