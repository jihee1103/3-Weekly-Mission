import { Card } from "../component/FolderCard/card.jsx";
import { SearchBar } from "../component/SearchBar/searchbar.jsx";
import { getLinkData } from "../api/getLinkData.js";
import { getFolderData } from "../api/getFolderData.js";
import defaultImage from "../component/FolderCard/card-component-default.png";
import "./style.css";
import { useState, useEffect } from "react";
import { AddLinkBar } from "../component/AddLinkBar/addlinkbar.jsx";
import { FilterButton } from "../component/FilterButton/filter-button.jsx";
import { getFolderIdData } from "../api/getFolderIdData.js";

export function Folder() {
  const [linkData, setLinkData] = useState([]);
  const [filterFolder, setFilterFolder] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getLinkData();
      setLinkData(data.data);

      const filterData = await getFolderData();
      setFilterFolder(filterData.data);
    };
    getData();
  }, []);

  const handleClickFilter = (folderId) => {
    const response = getFolderIdData(folderId);
    response.then((data) => {
      setLinkData(data.data);
    });
  };

  return (
    <>
      <AddLinkBar />
      <SearchBar />
      {filterFolder.map((folder) => {
        return (
          <FilterButton
            key={folder.id}
            name={folder.name}
            onClick={() => {
              handleClickFilter(folder.id);
            }}
          />
        );
      })}

      <div className="card-component-section">
        {!!linkData.length ? (
          linkData.map((e) => (
            <Card
              key={e.id}
              image_source={e.image_source || defaultImage}
              description={e.description}
              created_at={e.created_at}
              url={e.url}
            />
          ))
        ) : (
          <p>저장된 링크가 없습니다.</p>
        )}
      </div>
    </>
  );
}
