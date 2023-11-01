import { Book } from "./Book";

export const BookList = ({ data }) => {
  return (
    <ul className="latest-books">
      {data === null ? (
        <div className="loading">Loading...</div>
      ) : (
        data.map((book) => (
          <div key={book.id} className="booklist_actions">
            <Book book={book} />
          </div>
        ))
      )}
    </ul>
  );
};
