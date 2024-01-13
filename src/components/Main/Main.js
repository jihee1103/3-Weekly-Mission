import "./Main.css";
import getData from "../../api/getData";
import { useState, useEffect } from "react";
import CardList from "../../card/CardList";
import SearchBar from "../SearchBar/SearchBar";

const Main = function () {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const result = await getData("/sample/folder");
      setCardData(result.folder.links);
    };

    data();
  }, []);

  return (
    <div className="Main">
      <div className="content-box">
        <SearchBar />
        <CardList cardData={cardData} />
      </div>
    </div>
  );
};

export default Main;
