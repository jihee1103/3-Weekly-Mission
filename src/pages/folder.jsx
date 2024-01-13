import { Card } from "../component/Card/card.jsx";
import { SearchBar } from "../component/SearchBar/searchbar.jsx";
import { getFetch } from "../api/getFetch.jsx";
import { getFolderData } from "../api/getFolderData.jsx";
import defaultImage from "./card-component-default.png";
import "./style.css";
import { useState, useEffect } from "react";
import { AddLinkBar } from "../component/AddLinkBar/addlinkbar.jsx";
import { FilterButton } from "../component/FilterButton/filter-button.jsx";

export function Folder() {
  const [folder, setFolder] = useState(null);
  const [filterFolder, setFilterFolder] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getFetch();
      setFolder(data.folder);

      const filterData = await getFolderData();
      setFilterFolder(filterData);
    };
    getData();
  }, []);
  return (
    <>
      <AddLinkBar />
      <SearchBar />

      {filterFolder &&
        filterFolder.data.map((e) => {
          return <FilterButton key={e.id} name={e.name} />;
        })}

      <div className="card-component-section">
        {folder &&
          folder.links.map((e) => {
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
          })}
      </div>
    </>
  );
}
