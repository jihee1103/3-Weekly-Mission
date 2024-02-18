"use client";

import React, { useEffect, useState } from "react";
import {
  SharedPageState,
  SampleFolderData,
  SampleUserData,
} from "../../utils/types";
import SearchLinkBar from "../../components/SearchLinkBar";
import SharedPageHeaderNavigation from "../../components/SharedPageHeaderNavigation";
import SharedPageHeaderUserInfo from "../../components/SharedPageHeaderUserInfo";
import getSampleUserData from "../../api/getSampleUserData";
import getSampleFolderData from "../../api/getSampleFolderData";
import SharedPageCardList from "../../components/SharedPageCardList";
import styles from "./index.module.css";

export const SharedPageStateContext = React.createContext<
  SharedPageState | undefined
>(undefined);
//언디파인드 타입으로 넣으면 안 좋은 이유?

// ---

// 서버에서 받아오는 데이터랑 작성한 인터페이스 (특히 api 부분) 이 달라서 생긴 문제였다.
const SharedPage = () => {
  const [userData, setUserData] = useState<SampleUserData | null>(null);
  const [folderData, setFolderData] = useState<SampleFolderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [data, response] = await Promise.all([
        getSampleUserData(),
        getSampleFolderData(),
      ]);
      setUserData(data);
      setFolderData(response.folder);
    };
    fetchData();
  }, []);

  return (
    <SharedPageStateContext.Provider
      value={{
        userData: userData || null,
        folderData: folderData || null,
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
