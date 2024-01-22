import { Card } from "../components/Card/card.jsx";
import { SearchBar } from "../components/SearchBar/searchbar.jsx";
import { getFetch } from "../api/getFetch.js";
import { getUserData } from "../api/getUserData.js";
import defaultImage from "../components/Card/card-component-default.png";
import "./style.css";
import { useState, useEffect } from "react";
import { HeaderInfo } from "../components/HeaderInfo/header-info.jsx";

export function Shared() {
  const [folder, setFolder] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getFetch();
      setFolder(data.folder);

      const user = await getUserData();
      setUser(user);
    };
    getData();
  }, []);

  return (
    <>
      {folder !== null ? <HeaderInfo folder={folder} user={user} /> : undefined}
      <div className="main-section">
        <SearchBar />
        <div className="card-component-section">
          {folder !== null
            ? folder.links.map((e) => {
                return (
                  <Card
                    key={e.id}
                    imageSource={
                      e.imageSource !== undefined ? e.imageSource : defaultImage
                    }
                    description={e.description}
                    createdAt={e.createdAt}
                    url={e.url}
                  />
                );
              })
            : undefined}
        </div>
      </div>
    </>
  );
}
