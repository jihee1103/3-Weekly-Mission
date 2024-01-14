import { Card } from "../component/FolderCard/card.jsx";
import { SearchBar } from "../component/SearchBar/searchbar.jsx";
import { getLinkData } from "../api/getLinkData.jsx";
import { getFolderData } from "../api/getFolderData.jsx";
import defaultImage from "../component/FolderCard/card-component-default.png";
import "./style.css";
import { useState, useEffect } from "react";
import { AddLinkBar } from "../component/AddLinkBar/addlinkbar.jsx";
import { FilterButton } from "../component/FilterButton/filter-button.jsx";

export function Folder() {
  const [linkData, setLinkData] = useState({ data: [] });
  const [filterFolder, setFilterFolder] = useState({ data: [] });

  useEffect(() => {
    const getData = async () => {
      const data = await getLinkData();
      setLinkData(data);

      const filterData = await getFolderData();
      setFilterFolder(filterData);
    };
    getData();
  }, []);

  const handleFilter = () {

  }

  return (
    <>
      <AddLinkBar />
      <SearchBar />
      {filterFolder.data.map((e) => (
        <FilterButton key={e.id} name={e.name} onClick={handleFilter}/>
      ))}

      <div className="card-component-section">
        {linkData &&
          linkData.data.map((e) => (
            <Card
              key={e.id}
              image_source={e.image_source || defaultImage}
              description={e.description}
              created_at={e.created_at}
              url={e.url}
            />
          ))}
      </div>
    </>
  );
}
