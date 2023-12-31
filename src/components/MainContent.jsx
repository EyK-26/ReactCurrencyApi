import { BookList } from "../book/BookList";
import { useState, useEffect } from "react";

export const MainContent = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const loadData = async () => {
    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${page}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div className="booklist">
      <h2>Latest books</h2>
      <BookList data={data} />
      {page > 1 && (
        <button
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>
      )}
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
