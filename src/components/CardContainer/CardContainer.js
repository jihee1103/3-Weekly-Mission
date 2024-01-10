import "./CardContainer.css";
import CardList from "../CardList/CardList";
import { useFolderNameContext } from "../../context/FolderNameContext";

const CardContainer = ({ cardData, allCardData }) => {
  const { folderName } = useFolderNameContext();

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
};
export default CardContainer;
