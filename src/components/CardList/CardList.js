import { useEffect, useState } from "react";
import { getFolderData } from "../../apis/api";
import Card from "../Card/Card";
import "./CardList.css";

function CardList() {
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    const handleLoadCardList = async () => {
      const cards = await getFolderData();
      setCardList(cards.folder.links);
    };

    handleLoadCardList();
  }, []);

  return (
    <div className="card-list">
      {cardList &&
        cardList.map((link) => <Card key={link.id} link={link}></Card>)}
    </div>
  );
}
export default CardList;
