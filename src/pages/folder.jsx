import { Card } from "../components/FolderCard/card.jsx";
import { SearchBar } from "../components/SearchBar/searchbar.jsx";
import { getLinkData } from "../api/getLinkData.js";
import { getFolderData } from "../api/getFolderData.js";
import defaultImage from "../components/FolderCard/card-component-default.png";
import "./style.css";
import { useState, useEffect } from "react";
import { AddLinkBar } from "../components/AddLinkBar/addlinkbar.jsx";
import { FilterButton } from "../components/FilterButton/filter-button.jsx";
import { getFolderIdData } from "../api/getFolderIdData.js";
import { OptionNavBar } from "../components/OptionNavBar/optionNavBar.jsx";

export function Folder() {
  const [linkData, setLinkData] = useState([]);
  const [filterFolder, setFilterFolder] = useState([]);
  const [selectedFolderName, setSelectedFolderName] = useState("전체");

  useEffect(() => {
    const getData = async () => {
      const data = await getLinkData();
      setLinkData(data.data);

      const filterData = await getFolderData();
      setFilterFolder([{ id: "all", name: "전체" }, ...filterData.data]);
    };
    getData();
  }, []);

  const handleClickFilter = async (folderId) => {
    if (folderId === "all") {
      setSelectedFolderName("전체");
      const data = await getLinkData();
      setLinkData(data.data);
    } else {
      const folder = filterFolder.find((f) => f.id === folderId);
      setSelectedFolderName(folder && folder.name);
      const response = await getFolderIdData(folderId);
      setLinkData(response.data);
    }
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
      <OptionNavBar name={selectedFolderName} />
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
