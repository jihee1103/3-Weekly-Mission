import Card from "./Card";
import "./CardList.css";

const CardList = function ({ cardData }) {
  return (
    <div className="CardList">
      {cardData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
