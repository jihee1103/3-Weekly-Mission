import React from "react";
import Card from "../Card";
import "./CardList.css";

export default function CardList({ itemList }) {
  return (
    <ul className="card-list">
      {itemList
        ? itemList.map((item) => {
            return (
              <li className="card" key={item.id}>
                <Card item={item} />
              </li>
            );
          })
        : ""}
    </ul>
  );
}
