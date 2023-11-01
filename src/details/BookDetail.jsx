import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/Context";

export const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { state } = useContext(Context);

  const loadData = async () => {
    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=${id}`
    );
    const data = await response.json();
    setBook(data);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <div className="book-detail">
      <h2>Detail of a book</h2>

      {book ? (
        <>
          <h2>{book.title}</h2>
          <p>
            {(book.price * state.exchangeRate).toFixed(2)} {state.currency}
          </p>
          <img src={book.image} alt={book.title} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
