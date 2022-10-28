import React from "react";

export default function Cart({ itemIDs }) {
  return (
    <div style={{ width: "50px", margin: "10px" }}>
      {itemIDs.map((id) => (
        <div key={id} id={id} />
      ))}
    </div>
  );
};