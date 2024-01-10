import SearchArea from "../SearchArea/SearchArea";
import CardContainer from "../CardContainer/CardContainer.js";
import "./ContentsArea.css";
import FolderListArea from "../FolderListArea/FolderListArea";
import { useLocation } from "react-router";
import { useState } from "react";
import { SharedProvider } from "../../context/FolderNameContext";
import { getAllCardData, getCardDataById } from "../../api/api";

const ContentsArea = () => {
  const location = useLocation();

  const [cardData, setCardData] = useState({ data: [] });
  const [allCardData, setAllCardData] = useState({ data: [] });

  const handleFolderClick = async (itemId) => {
    const cardData = await getCardDataById(itemId);
    setCardData(cardData);
    console.log(cardData);
  };

  const handleAllFolderClick = async () => {
    const allCardData = await getAllCardData();
    setAllCardData(allCardData);
  };

  switch (location.pathname) {
    case "/shared":
      return (
        <div className="contentsArea">
          <SearchArea></SearchArea>
          <CardContainer></CardContainer>
        </div>
      );
    case "/folder":
      return (
        <div className="contentsArea">
          <SearchArea></SearchArea>
          <SharedProvider>
            <FolderListArea
              onFolderClick={handleFolderClick}
              onAllFolderClick={handleAllFolderClick}
            />
            <CardContainer cardData={cardData} allCardData={allCardData} />
          </SharedProvider>
        </div>
      );
    default:
      return (
        <div className="contentsArea">
          <p className="emptyMessage">저장된 링크가 없습니다</p>
        </div>
      );
  }
};

export default ContentsArea;
