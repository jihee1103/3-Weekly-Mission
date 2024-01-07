import SearchArea from "../SearchArea/SearchArea";
import CardContainer from "../CardContainer/CardContainer.js";
import "./ContentsArea.css";
import FolderListArea from "../FolderListArea/FolderListArea";
const ContentsArea = () => {
  return (
    <div className="contentsArea">
      <SearchArea></SearchArea>
      <FolderListArea />
      <CardContainer></CardContainer>
    </div>
  );
};

export default ContentsArea;
