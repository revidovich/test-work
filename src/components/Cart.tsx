import React from "react";

interface CartPropsInterface {
  itemIDs: number[];
}

export default function Cart({ itemIDs }: CartPropsInterface) {
  return (
    <div style={{ width: "50px", margin: "10px" }}>
      {itemIDs.map((id: number) => (
        <div key={id} />
      ))}
    </div>
  );
};