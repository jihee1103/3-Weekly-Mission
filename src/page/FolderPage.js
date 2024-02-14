import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddFolderButton from "../components/AddFolderButton";
import AddLinkBar from "../components/AddLinkBar";
import FolderFunctionButtons from "../components/FolderFunctionButtons";
import FolderNameButton from "../components/FolderNameButton";
import FolderTitle from "../components/FolderTitle";
import Footer from "../components/Footer";
import SearchLinkBar from "../components/SearchLinkBar";
import getFoldersNameData from "../api/getFoldersNameData";
import getAllFolderData from "../api/getAllFolderData";
import CardList from "../components/CardList";
import getFolderIdData from "../api/getFolderIdData";
import CardListDefault from "../components/CardListDefault";
import FolderPageHeaderNavigation from "../components/FolderPageHeaderNavigation";

export const FolderStateContext = React.createContext();

const FolderPage = () => {
  const [foldersNameData, setFoldersNameData] = useState([]);
  const [allFolderData, setAllFolderData] = useState([]);
  const [selectedFolderName, setSelectedFolderName] = useState("전체");

  useEffect(() => {
    const fetchData = async () => {
      const folderNameData = await getFoldersNameData();
      setFoldersNameData([{ id: "all", name: "전체" }, ...folderNameData.data]);

      const AllFolderData = await getAllFolderData();
      setAllFolderData(AllFolderData.data);
    };
    fetchData();
  }, []);

  const handleClickFilterFolder = async (folderName) => {
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
    <FolderStateContext.Provider
      value={{
        handleClickFilterFolder,
        selectedFolderName,
        foldersNameData,
        allFolderData,
      }}
    >
      <HeaderContainer>
        <FolderPageHeaderNavigation />

        <AddLinkBar />
      </HeaderContainer>
      <main>
        <section>
          <SearchLinkBar />
        </section>
        <FolderSelectSection>
          <FolderNameButton />
          <AddFolderButton />
        </FolderSelectSection>
        <article>
          <FolderListHeader>
            <FolderTitle />
            <FolderFunctionButtons />
          </FolderListHeader>
          <CardListContainer>
            {allFolderData.length > 0 ? (
              <CardList data={allFolderData} />
            ) : (
              <CardListDefault />
            )}
          </CardListContainer>
        </article>
      </main>
      <Footer />
    </FolderStateContext.Provider>
  );
};

export default FolderPage;

const HeaderContainer = styled.header`
  background-color: #f0f6ff;
  padding-top: 32px;
`;

const FolderSelectSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 0 auto;
`;

const FolderListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1060px;
  margin: 0 auto;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  width: 1060px;
  margin: 0 auto;
`;
