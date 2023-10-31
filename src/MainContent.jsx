import { BookList } from "./BookList";

export const MainContent = ({ data, page, setPage }) => {
  return (
    <>
      <h1>Latest books</h1>
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
    </>
  );
};
