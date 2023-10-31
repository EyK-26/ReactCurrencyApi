import { Book } from "./Book";

export const BookList = ({ data }) => {
  return (
    <ul className="latest-books">
      {data === null ? (
        <div className="loading">Loading...</div>
      ) : (
        data.map((book) => <Book key={book.id} {...book} />)
      )}
    </ul>
  );
};
