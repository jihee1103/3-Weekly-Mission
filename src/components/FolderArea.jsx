import Card from "./Card";
import SearchBar from "./SearchBar";
import "../css/FolderArea.css";
import { useEffect, useState } from "react";

export default function FolderArea() {
  const [links, setLink] = useState([]);

  const getLinks = async () => {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
      if (response.status === 200) {
        const folderInfo = await response.json();
        setLink(folderInfo.folder.links);
      } else throw new Error("fetch error");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="folder-area-container">
      <div className="contents-box">
        <SearchBar />
        <div className="card-box">
          {links.map((link) => {
            return (
              <Card
                key={link.id}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
