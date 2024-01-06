import React, { useState } from "react";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import styled from "./FolderPage.module.css";
import LinkAddForm from "../components/LinkAddForm/LinkAddForm";
import { getFolderList, getLinkList } from "../apis/api";
import FolderListButton from "../components/FolderListButton/FolderListButton";
import CardList from "../components/CardList/CardList";
import useFetchData from "../hooks/useFetchData";
import imageData from "../utils/imageData";

export default function FolderPage() {
  const [cardListItem, handleEntireData, handleIdData] =
    useFetchData(getLinkList);
  const [folderNameList] = useFetchData(getFolderList);
  const [folderName, setFolderName] = useState("전체");

  const noLinkElement = (
    <div className={styled.noLink}>
      <span>저장된 링크가 없습니다.</span>
    </div>
  );

  const folderNameLine = (
    <div className={styled.folderNameLine}>
      <h2 className={styled.folder_name}>{folderName}</h2>
      {folderName !== "전체" && (
        <div className={styled["icon-container"]}>
          <img src={imageData.shareIcon} alt="공유아이콘" />
          <span>공유</span>
          <img src={imageData.penIcon} alt="이름 변경아이콘" />
          <span>이름 변경</span>
          <img src={imageData.deleteIcon} alt="삭제아이콘" />
          <span>삭제</span>
        </div>
      )}
    </div>
  );

  const FloatingActionButton = (
    <div className={styled.floating}>
      <span>폴더추가</span>
      <img src={imageData.folderPulsIcon} alt="폴더추가하기 아이콘" />
    </div>
  );

  return (
    <main className={styled.main}>
      <section className={styled.header}>
        <LinkAddForm />
      </section>
      <section className={styled.linkBoard}>
        <LinkSearchForm />
        {folderNameList ? (
          <div className={styled.container}>
            <FolderListButton
              itemList={folderNameList}
              setFolderName={setFolderName}
              handleEntireData={handleEntireData}
              handleIdData={handleIdData}
              folderName={folderName}
            />
            {folderNameLine}
            {cardListItem ? (
              <CardList itemList={cardListItem} toggle={true} />
            ) : (
              noLinkElement
            )}
          </div>
        ) : (
          noLinkElement
        )}
        {FloatingActionButton}
      </section>
    </main>
  );
}
