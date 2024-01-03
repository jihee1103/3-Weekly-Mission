import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import "./FolderArea.css";
import { useEffect, useState } from "react";
import getFetchRequest from "../../utils/getFetchRequest";
import { API_FOLDER, BASE_API_HOST } from "../../constants/api";

export default function FolderArea() {
  const [links, setLink] = useState([]);

  const getLinks = async () => {
    try {
      const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
      setLink(result.folder.links);
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
