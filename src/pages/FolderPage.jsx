import React, { useState } from "react";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import styled from "./FolderPage.module.css";
import LinkAddForm from "../components/LinkAddForm/LinkAddForm";
import { getFolderList, getLinkList } from "../apis/api";
import FolderListButton from "../components/FolderListButton/FolderListButton";
import CardList from "../components/CardList/CardList";
import useFetchData from "../hooks/useFetchData";
import FolderNameLine from "../components/FolderNameLine/FolderNameLine";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import NoLinkBlock from "../components/NoLinkBlock/NoLinkBlock";

export default function FolderPage() {
  const [cardListItem, handleEntireData, handleIdData] =
    useFetchData(getLinkList);
  const [folderNameList] = useFetchData(getFolderList);
  const [folderName, setFolderName] = useState("전체");

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
            <FolderNameLine folderName={folderName} />
            {cardListItem ? (
              <CardList itemList={cardListItem} toggle={true} />
            ) : (
              <NoLinkBlock />
            )}
          </div>
        ) : (
          <NoLinkBlock />
        )}
        <FloatingActionButton />
      </section>
    </main>
  );
}
