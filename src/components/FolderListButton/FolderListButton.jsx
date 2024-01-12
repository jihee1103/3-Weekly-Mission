import React from "react";
import styled from "./FolderListButton.module.css";
import { getFolderData } from "../../apis/api";
import imageData from "../../utils/imageData";

export default function FolderListButton({
  ModalButtonClick,
  itemList,
  setFolderName,
  setCardListItem,
  folderName,
}) {
  const handleClick = ({ target }) => {
    setFolderName(target.name);
    setCardListItem(() => getFolderData(target.id));
  };

  const handleEntireClick = () => {
    setFolderName("전체");
    setCardListItem();
  };

  return (
    <div className={styled.container}>
      <button
        className={folderName === "전체" ? styled.activeBtn : styled.button}
        onClick={handleEntireClick}
      >
        전체
      </button>
      {itemList.map((item) => {
        return (
          <button
            className={
              folderName === item.name ? styled.activeBtn : styled.button
            }
            name={item.name}
            id={item.id}
            onClick={handleClick}
            key={item.id}
          >
            {item.name}
          </button>
        );
      })}
      <img
        id="addFolder"
        className={styled.icon}
        src={imageData.plusIcon}
        alt="더하기 아이콘"
        onClick={ModalButtonClick}
      />
    </div>
  );
}
