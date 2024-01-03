import React from 'react';
import SearchBar from "../../components/forms/SearchBar";
import FolderContainer from "./FolderContainer";

const Contents = ({data}) => {
  return (
      <div className="contents-folder">
        <SearchBar/>
        <FolderContainer data={data}/>
      </div>
  );
}
export default Contents;
