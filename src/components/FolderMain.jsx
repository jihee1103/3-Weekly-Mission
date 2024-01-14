import SearchBar from "../components/SearchBar/SearchBar";
import CardList from "../card/CardList";
import getData from "../api/getData";
import SortingBar from "../components/SortingBar";
import { useState, useEffect } from "react";

const FolderMain = function () {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const result = await getData("/api/users/1/links");
      setCardData(result.data);
    };

    data();
  }, []);
  return (
    <>
      <div className="Main">
        <div className="content-box">
          <SearchBar />
          <SortingBar />
          <CardList cardData={cardData} />
        </div>
      </div>
    </>
  );
};

export default FolderMain;
