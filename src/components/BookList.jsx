import { Book } from "./Book";
import { Button } from "./Button";

export const BookList = ({ data }) => {
  return (
    <ul className="latest-books">
      {data === null ? (
        <div className="loading">Loading...</div>
      ) : (
        data.map((book) => (
          <div key={book.id} className="booklist_actions">
            <Book {...book} />
            <Button {...book} />
          </div>
        ))
      )}
    </ul>
  );
};
