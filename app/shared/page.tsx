"use client";

import React from "react";
import SharedPageStateContext from "../../context/SharedPageStateContext";
import SearchLinkBar from "../../components/SearchLinkBar";
import SharedPageHeaderNavigation from "../../components/SharedPageHeaderNavigation";
import SharedPageHeaderUserInfo from "../../components/SharedPageHeaderUserInfo";
import SharedPageCardList from "../../components/SharedPageCardList";
import getSampleUserData from "../../api/getSampleUserData";
import getSampleFolderData from "../../api/getSampleFolderData";
import styles from "./index.module.css";

const SharedPage = async () => {
  const userData = await getSampleUserData();
  const folderData = await getSampleFolderData();
  return (
    <SharedPageStateContext.Provider
      value={{
        userData: userData || null,
        folderData: folderData.folder || null,
      }}
    >
      <header className={styles.header}>
        <SharedPageHeaderNavigation />
        <SharedPageHeaderUserInfo />
      </header>
      <main>
        <section>
          <SearchLinkBar />
        </section>
        <article>
          <div className={styles.div}>
            <SharedPageCardList />
          </div>
        </article>
      </main>
    </SharedPageStateContext.Provider>
  );
};

export default SharedPage;
