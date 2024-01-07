import SearchArea from "../SearchArea/SearchArea";
import CardContainer from "../CardContainer/CardContainer.js";
import "./ContentsArea.css";
const ContentsArea = () => {
  return (
    <div className="contentsArea">
      <SearchArea></SearchArea>
      <CardContainer></CardContainer>
    </div>
  );
};

export default ContentsArea;
