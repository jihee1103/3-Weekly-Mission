import Profile from "../components/Profile";
import Main from "../components/Main/Main";
import AddLink from "../components/addLink/AddLink";
import SearchBar from "../components/SearchBar/SearchBar";
import CardList from "../card/CardList";
import getData from "../api/getData";
import SortingBar from "../components/SortingBar";
import { useState, useEffect } from "react";
// import getData from "../api/getData";

const Folder = function () {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const result = await getData("/sample/folder");
      setCardData(result.folder.links);
    };

    data();
  }, []);
  return (
    <>
      <AddLink />
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

export default Folder;

//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     const data = async () => {
//       const result = await getData("/users/1/folders");
//       setCardData(result.folder.links);
//     };

//     data();
//   }, []);
