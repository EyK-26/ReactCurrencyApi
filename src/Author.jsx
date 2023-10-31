import React from "react";

export const Author = ({ name, bio }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{bio && bio.replace(/<\/?p>/g, "")}</p>
    </>
  );
};
