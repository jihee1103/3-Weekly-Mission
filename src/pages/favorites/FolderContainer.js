import React from "react";
import FolderItem from "./FolderItem";

const FolderContainer = ({data}) => {
  return (
      <div className="folder-item-container">
        {data.map((item) => (
            <FolderItem key={item.id} item={item}/>
        ))}
      </div>
  )
}
export default FolderContainer;