import { useEffect, useState } from "react";
import { fetchFolderData } from "../apis/api";
import Card from "./Card";
import "../styles/CardList.css";

function CardList() {
  const [cardListData, setCardListData] = useState({
    folder: {
      links: [
        {
          id: "",
          createdAt: "",
          url: "",
          title: "",
          description: "",
          imageSource: "",
        },
      ],
    },
  });

  const handleLoadCardList = async () => {
    const reponse = await fetchFolderData();
    setCardListData(reponse);
    console.log(reponse);
    console.log(reponse.folder.links[0].createdAt);
  };

  useEffect(() => {
    handleLoadCardList();
  }, []);

  return (
    <>
      <div className="card-list">
        <Card cardList={cardListData.folder.links}></Card>
      </div>
    </>
  );
}
export default CardList;
