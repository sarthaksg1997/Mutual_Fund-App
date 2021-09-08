import React from "react";

const Error = ({ func }) => {
  return (
    <>
      <div className="errorMsg">
        <h2>Failed to load</h2>
        <button onClick={func}>Try Again</button>
      </div>
    </>
  );
};

export default Error;
