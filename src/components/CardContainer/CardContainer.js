import "./CardContainer.css";
import CardList from "../CardList/CardList";
import { useFolderNameContext } from "../../context/FolderNameContext";
import { useLocation } from "react-router";

const CardContainer = ({ cardData, allCardData, sharedFolderData }) => {
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
            <CardList cardList={cardData.data}></CardList>
          </div>
        );
      }
      return (
        <div className="cardContainer">
          <CardList cardList={allCardData.data}></CardList>
        </div>
      );
    default:
      return null;
  }
};
export default CardContainer;
