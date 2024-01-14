import SearchBar from "../components/SearchBar/SearchBar";
import CardList from "../card/CardList";
import getData from "../api/getData";
import SortingBar from "../components/SortingBar";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ToolBar from "./ToolBar";

const FolderMain = function () {
  const [cardData, setCardData] = useState([]);
  const [folderName, setFolderName] = useState([]);
  const [folder, setFolder] = useState("");

  useEffect(() => {
    const data = async () => {
      const result = await getData(`/users/1/links${folder === "all" ? "" : `?folderId=${folder}`}`);
      setCardData(result.data);
    };

    data();
  }, [folder]);

  useEffect(() => {
    const Data = async () => {
      const result = await getData("/users/1/folders");
      setFolderName(result.data);
    };

    Data();
  }, []);

  const handleSort = (selected) => {
    setFolder(selected);
  };

  return (
    <div className="content-box">
      <SearchBar />
      <SortingBar folderName={folderName} handleSort={handleSort} />
      {folder !== "all" ? <ToolBar /> : <></>}
      {cardData.length === 0 ? <NoneFolder>저장된 링크가 없습니다</NoneFolder> : <CardList cardData={cardData} />}
    </div>
  );
};

export default FolderMain;

const NoneFolder = styled.div`
  display: flex;
  height: 100px;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;
