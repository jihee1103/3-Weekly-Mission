import React, { useEffect, useState } from "react";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import styled from "./FolderPage.module.css";
import LinkAddForm from "../components/LinkAddForm/LinkAddForm";
import { getFolderList, getLinkList } from "../apis/api";
import FolderListButton from "../components/FolderListButton/FolderListButton";
import CardList from "../components/CardList/CardList";

export default function FolderPage() {
  const [cardListItem, setCardListItem] = useState(null);
  const [folderNameList, setFolderNameList] = useState(null);

  const handleGetFolderList = async () => {
    try {
      const result = await getFolderList();
      if (!result) throw new Error("없습니다!");

      const { data } = result;
      setFolderNameList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetFolderList();
  }, []);

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
              setItemList={setFolderNameList}
            />
            <h2 className={styled.folder_name}>{folderNameList[0].name}</h2>
            {cardListItem ? <CardList itemList={cardListItem} /> : null}
          </div>
        ) : (
          <div className={styled.noLink}>
            <span>저장된 링크가 없습니다.</span>
          </div>
        )}
      </section>
    </main>
  );
}
