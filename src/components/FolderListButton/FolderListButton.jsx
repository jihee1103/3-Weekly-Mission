import React from "react";
import styled from "./FolderListButton.module.css";
import { getFolderData } from "../../apis/api";

export default function FolderListButton({
  itemList,
  setFolderName,
  handleIdData,
  handleEntireData,
}) {
  const handleClick = ({ target }) => {
    setFolderName(target.name);
    handleIdData(getFolderData, target.id);
  };

  const handleEntireClick = () => {
    setFolderName("전체");
    handleEntireData();
  };

  return (
    <div className={styled.container}>
      <button onClick={handleEntireClick}>전체</button>
      {itemList.map((item) => {
        return (
          <button
            name={item.name}
            id={item.id}
            onClick={handleClick}
            key={item.id}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
