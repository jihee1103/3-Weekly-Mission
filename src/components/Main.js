import "./Main.css";
import getFolder from "../api/getFolder";
import { useState, useEffect } from "react";
import CardList from "../card/CardList";

const Main = function () {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const result = await getFolder();
      setCardData(result.folder.links);
    };

    data();
  }, []);

  return (
    <div className="Main">
      <div className="content-box">
        <input className="search-bar" placeholder="링크를 검색해 보세요." />
        <CardList cardData={cardData} />
      </div>
    </div>
  );
};

export default Main;
