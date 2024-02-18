"use client";

import React, { useEffect, useState } from "react";
import { FolderNameData, FolderData, FolderPageState } from "../../utils/types";
import { ModalProvider } from "../../hook/useModal";
import AddFolderButton from "../../components/AddFolderButton";
import AddLinkBar from "../../components/AddLinkBar";
import FolderFunctionButtons from "../../components/FolderFunctionButtons";
import FolderNameButton from "../../components/FolderNameButton";
import FolderTitle from "../../components/FolderTitle";
import SearchLinkBar from "../../components/SearchLinkBar";
import getFoldersNameData from "../../api/getFoldersNameData";
import getAllFolderData from "../../api/getAllFolderData";
import getFolderIdData from "../../api/getFolderIdData";
import CardListDefault from "../../components/CardListDefault";
import FolderPageHeaderNavigation from "../../components/FolderPageHeaderNavigation";
import FolderPageCardList from "../../components/FolderPageCardList";
import styles from "./index.module.css";

export const FolderPageStateContext = React.createContext<
  FolderPageState | undefined
>(undefined);

const FolderPage = () => {
  const [foldersNameData, setFoldersNameData] = useState<FolderNameData[]>([]);
  const [allFolderData, setAllFolderData] = useState<FolderData[]>([]);
  const [selectedFolderName, setSelectedFolderName] = useState<string>("전체");

  useEffect(() => {
    const fetchData = async () => {
      const folderNameData = await getFoldersNameData();
      setFoldersNameData([
        {
          id: "all",
          name: "전체",
          created_at: "",
          user_id: 1,
          favorite: false,
          link: { count: 0 },
        },
        ...folderNameData.data,
      ]);

      const AllFolderData = await getAllFolderData();
      setAllFolderData(AllFolderData.data);
    };
    fetchData();
  }, []);

  const handleClickFilterFolder = async (folderName: string) => {
    if (folderName === "전체") {
      setSelectedFolderName("전체");
      const data = await getAllFolderData();
      if (data && data.data) {
        setAllFolderData(data.data);
      }
    } else {
      const folder = foldersNameData.find(
        (folder) => folder.name === folderName
      );
      if (folder) {
        setSelectedFolderName(folder.name);
        const response = await getFolderIdData(folder.id);

        if (response && response.data) {
          setAllFolderData(response.data);
        }
      }
    }
  };

  return (
    <ModalProvider>
      <FolderPageStateContext.Provider
        value={{
          handleClickFilterFolder,
          selectedFolderName,
          foldersNameData,
          allFolderData,
        }}
      >
        <header className={styles.mainHeader}>
          <FolderPageHeaderNavigation />
          <AddLinkBar />
        </header>
        <main>
          <section>
            <SearchLinkBar />
          </section>
          <section className={styles.folderSelectSection}>
            <FolderNameButton />
            <AddFolderButton />
          </section>
          <article>
            <header className={styles.folderListHeader}>
              <FolderTitle />
              <FolderFunctionButtons />
            </header>
            <div className={styles.cardListContainer}>
              {allFolderData.length > 0 ? (
                <FolderPageCardList />
              ) : (
                <CardListDefault />
              )}
            </div>
          </article>
        </main>
      </FolderPageStateContext.Provider>
    </ModalProvider>
  );
};

export default FolderPage;
