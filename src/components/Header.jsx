import React from "react";

export const Header = ({count}) => {
  return (
    <>
      <h1 className="center-text">COUNTER</h1>
      <h2 className="center-text">{count}</h2>
    </>
  );
};
