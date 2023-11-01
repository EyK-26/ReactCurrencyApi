import React from "react";
import { Author } from "./Author";

export const Authors = ({ authors }) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>
          <Author {...author} />
        </div>
      ))}
    </div>
  );
};
