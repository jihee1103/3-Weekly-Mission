import SearchArea from "../SearchArea/SearchArea";
import CardContainer from "../CardContainer/CardContainer.js";
import "./ContentsArea.css";
import FolderListArea from "../FolderListArea/FolderListArea";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { SharedProvider } from "../../context/FolderNameContext";
import { getAllCardData, getCardDataById, getFolderData } from "../../api/api";
import EmptyArea from "../EmptyArea/EmptyArea";

const ContentsArea = () => {
  const location = useLocation();

  const [cardData, setCardData] = useState({ data: [] });
  const [allCardData, setAllCardData] = useState({ data: [] });
  const [sharedFolderData, setSharedFolderData] = useState({
    folder: { links: [{ id: "", createdAt: "", description: "", url: "" }] },
  });
  const [inputText, setInputText] = useState();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleFolderClick = async (itemId) => {
    const cardData = await getCardDataById(itemId);
    setCardData(cardData);
  };

  const handleAllFolderClick = async () => {
    const allCardData = await getAllCardData();
    setAllCardData(allCardData);
  };

  const getSharedFolderData = async () => {
    const sharedFolderData = await getFolderData();
    setSharedFolderData(sharedFolderData);
  };

  useEffect(() => {
    getSharedFolderData();
  }, []);

  switch (location.pathname) {
    case "/shared":
      return (
        <div className="contentsArea">
          <SearchArea></SearchArea>
          <CardContainer sharedFolderData={sharedFolderData}></CardContainer>
        </div>
      );
    case "/folder":
      return (
        <div className="contentsArea">
          <SearchArea
            handleInputText={handleInputText}
            inputText={inputText}
          ></SearchArea>
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
      return <EmptyArea></EmptyArea>;
  }
};

export default ContentsArea;
