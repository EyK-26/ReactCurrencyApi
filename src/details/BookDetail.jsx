import { useParams } from "react-router-dom";

export const BookDetail = () => {
  const params = useParams();
  const { id } = useParams();

  return <h3>Book Details</h3>;
};
