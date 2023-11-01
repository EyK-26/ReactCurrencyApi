import React from "react";
import { Author } from "./Author";

export const Authors = ({ authors }) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>
          <h3>Author Info</h3>
          <Author {...author} />
        </div>
      ))}
    </div>
  );
};
