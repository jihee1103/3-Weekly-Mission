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
import Modal from "../components/Modal/Modal";

export default function FolderPage({ user }) {
  const { data: cardListItem, fetchData: setCardListItem } =
    useFetchData(getLinkList);
  const { data: folderNameList } = useFetchData(getFolderList);
  const [folderName, setFolderName] = useState("전체");
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalUrl, setModalUrl] = useState(null);
  const toggleModalClick = () => {
    setIsModalClicked(!isModalClicked);
  };
  const handleModalButtonClick = ({ currentTarget, url }) => {
    const targetId = currentTarget.id;
    setModalId(targetId);
    setModalUrl(url);
    toggleModalClick();
  };

  return (
    <main className={styled.main}>
      {isModalClicked && (
        <Modal
          user={user}
          itemList={folderNameList}
          modalUrl={modalUrl}
          folderName={folderName}
          modalId={modalId}
          toggleModalClick={toggleModalClick}
        />
      )}
      <section className={styled.header}>
        <LinkAddForm />
      </section>
      <section className={styled.linkBoard}>
        <LinkSearchForm />
        {folderNameList ? (
          <div className={styled.container}>
            <FolderListButton
              handleModalButtonClick={handleModalButtonClick}
              itemList={folderNameList}
              setFolderName={setFolderName}
              setCardListItem={setCardListItem}
              folderName={folderName}
            />
            <FolderNameLine
              handleModalButtonClick={handleModalButtonClick}
              folderName={folderName}
            />
            {cardListItem ? (
              <CardList
                handleModalButtonClick={handleModalButtonClick}
                itemList={cardListItem}
                toggle={true}
              />
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
