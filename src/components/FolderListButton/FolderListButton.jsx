import React from "react";
import styled from "./FolderListButton.module.css";
import { getFolderData, getLinkList } from "../../apis/api";

export default function FolderListButton({
  itemList,
  setItemList,
  setFolderName,
}) {
  const handleClick = async ({ target }) => {
    setFolderName(target.name);
    try {
      const result = await getFolderData(target.id);
      if (!result) {
        throw new Error("데이터를 가져올 수 없습니다!");
      }

      const { data } = result;
      if (data.length < 1) {
        setItemList(null);
        return;
      }
      setItemList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEntireClick = async () => {
    setFolderName("전체");
    try {
      const result = await getLinkList();
      if (!result) {
        throw new Error("데이터를 가져올 수 없습니다!");
      }
      const { data } = result;
      setItemList(data);
    } catch (error) {
      console.log(error);
    }
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
