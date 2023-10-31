import { useEffect, useState } from "react";
import Book from "./Book";
import { BookList } from "./BookList";
import { Header } from "./Header";

function App() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"
    );
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />
      <h1>Latest books</h1>
      <BookList data={data} />
    </>
  );
}

export default App;
