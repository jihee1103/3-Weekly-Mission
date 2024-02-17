import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import SearchLinkBar from "../components/SearchLinkBar";
import SharedPageHeaderNavigation from "../components/SharedPageHeaderNavigation";
import SharedPageHeaderUserInfo from "../components/SharedPageHeaderUserInfo";
import getSampleUserData from "../api/getSampleUserData";
import getSampleFolderData from "../api/getSampleFolderData";
import SharedPageCardList from "../components/SharedPageCardList";
import {
  SharedPageState,
  SampleFolderData,
  SampleUserData,
} from "../utils/types";

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
      <HeaderContainer>
        <SharedPageHeaderNavigation />
        <SharedPageHeaderUserInfo />
      </HeaderContainer>
      <main>
        <section>
          <SearchLinkBar />
        </section>
        <article>
          <CardListContainer>
            <SharedPageCardList />
          </CardListContainer>
        </article>
      </main>
      <Footer />
    </SharedPageStateContext.Provider>
  );
};

export default SharedPage;

const HeaderContainer = styled.header`
  background-color: #f0f6ff;
  padding-top: 32px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  width: 1060px;
  margin: 0 auto;
`;
