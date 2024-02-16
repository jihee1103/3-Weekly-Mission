import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import SearchLinkBar from "../components/SearchLinkBar";
import SharedPageHeaderNavigation from "../components/SharedPageHeaderNavigation";
import SharedPageHeaderUserInfo from "../components/SharedPageHeaderUserInfo";
import getSampleUserData from "../api/getSampleUserData";
import getSampleFolderData from "../api/getSampleFolderData";
import SharedPageCardList from "../components/SharedPageCardList";

export const SharedPageStateContext = React.createContext();

const SharedPage = () => {
  const [userData, setUserData] = useState(null);
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSampleUserData();
      setUserData(data);

      const response = await getSampleFolderData();
      setFolderData(response);
    };
    fetchData();
  }, []);

  return (
    <SharedPageStateContext.Provider value={{ userData, folderData }}>
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
