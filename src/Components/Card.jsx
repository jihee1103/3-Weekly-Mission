import React from "react";
import { getCreateDay, getTimeDifference } from "../utils/util";

export default function Card({ item }) {
  const { createdAt, description, imageSource, url, title } = item;

  const timeAgo = getTimeDifference(createdAt);
  const createdDay = getCreateDay(createdAt);
  const imgAlt = `${title} 새창으로 바로가기 이미지`;

  return (
    <a href={url} target="_brank">
      <img src={imageSource} alt={imgAlt} />
      <div className="card-info">
        <span className="time-ago">{timeAgo}</span>
        <p className="description">{description}</p>
        <span className="created-day">{createdDay}</span>
      </div>
    </a>
  );
}
