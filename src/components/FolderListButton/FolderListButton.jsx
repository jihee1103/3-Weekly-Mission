import React from "react";
import styled from "./FolderListButton.module.css";

export default function FolderListButton({ itemList, setItemList }) {
  const handleClick = async () => {};
  return (
    <div className={styled.container}>
      <button>전체</button>
      {itemList.map((item) => {
        return (
          <button onClick={handleClick} key={item.id}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
