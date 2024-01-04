import React from "react";
import {getTimeDifferenceString} from "../../utils/times";

const FolderItem = ({item}) => {
  const {createdAt, description, imageSource, url} = item;
  const convertedTime = getTimeDifferenceString(createdAt);
  const date = new Date(createdAt).toLocaleDateString();
  return (
      <div className="folder-item">

        <a href={url}>
          <div className="folder-image-area"
               style={{backgroundImage: `url(${imageSource})`}}>
          </div>
        </a>

        <div className=" folder-info-area">
          <p className=" createdAt">{convertedTime}</p>
          <p className=" description">{description}</p>
          <p className=" date">{date}</p>
        </div>

      </div>
  )
}
export default FolderItem