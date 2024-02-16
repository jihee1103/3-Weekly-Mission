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

const SharedPage = () => {
  const [userData, setUserData] = useState<SampleUserData[] | null>(null);
  const [folderData, setFolderData] = useState<SampleFolderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSampleUserData();
      setUserData(data.data);

      const response = await getSampleFolderData();
      setFolderData(response.folder);
    };
    fetchData();
  }, []);

  return (
    <SharedPageStateContext.Provider
      value={{
        userData: userData || [],
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
