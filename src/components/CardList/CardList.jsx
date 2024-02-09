import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

export default function CardList({
  itemList,
  toggle,
  handleModalButtonClick = null,
}) {
  return (
    <ul className="card-list">
      {itemList
        ? itemList.map((item) => {
            return (
              <li className="card" key={item.id}>
                <Card
                  handleModalButtonClick={handleModalButtonClick}
                  toggle={toggle}
                  item={item}
                />
              </li>
            );
          })
        : null}
    </ul>
  );
}
