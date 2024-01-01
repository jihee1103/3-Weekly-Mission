import { useEffect, useState } from "react";
import Card from "../card/Card";
import Searchbar from "../searchbar/Searchbar";
import "./Section.css";

function Section() {
  const [card, setCard] = useState([]);
  const [createdAt, setCreatedAt] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getCardInfo() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        console.log(response);
        if (response.status === 200) {
          const cardData = await response.json();
          setCard(cardData.folder.links);
          setCreatedAt(cardData.folder.links.createdAt);
          setUrl(cardData.folder.links.url);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getCardInfo();
  }, []);

  const onClickCard = (e) => {
    window.open(url);
  };

  return (
    <>
      <div className="section-container">
        <Searchbar />
      </div>
      <div className="card-container" onClick={onClickCard}>
        <div className="card-wrap">
          {card.map((link) => {
            return <Card key={card.id} link={link} createdAt={createdAt} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Section;
