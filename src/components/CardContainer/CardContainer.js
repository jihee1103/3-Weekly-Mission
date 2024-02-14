import "./CardContainer.css";
import CardList from "../CardList/CardList";
import { useFolderNameContext } from "../../context/FolderNameContext";
import { useLocation } from "react-router";

const CardContainer = ({
  cardData,
  allCardData,
  sharedFolderData,
  inputText,
}) => {
  const location = useLocation();
  const { folderName } = useFolderNameContext();

  switch (location.pathname) {
    case "/shared":
      return (
        <div className="cardContainer">
          <CardList cardList={sharedFolderData.folder.links}></CardList>
        </div>
      );
    case "/folder":
      if (folderName !== "전체") {
        return (
          <div className="cardContainer">
            <CardList cardList={cardData.data} inputText={inputText}></CardList>
          </div>
        );
      }
      return (
        <div className="cardContainer">
          <CardList
            cardList={allCardData.data}
            inputText={inputText}
          ></CardList>
        </div>
      );
    default:
      return null;
  }
};
export default CardContainer;
