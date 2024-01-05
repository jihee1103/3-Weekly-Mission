import React from "react";
import { getCreateDay, getTimeDifference } from "../utils/util";
import defaultImg from "../assets/images/1.png";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const {
    created_at,
    createdAt,
    description,
    imageSource,
    image_source,
    url,
    title,
  } = item;

  const dateTimeString = created_at ? created_at : createdAt;
  const timeAgo = getTimeDifference(dateTimeString);
  const createdDay = getCreateDay(dateTimeString);
  const imgAlt = `${title} 새창으로 바로가기 이미지`;
  const imgSource = imageSource
    ? imageSource
    : image_source
    ? image_source
    : defaultImg;

  return (
    <Link to={url} rel="noreferrer noopener" target="_blank">
      <img src={imgSource} alt={imgAlt} />
      <div className="card-info">
        <span className="time-ago">{timeAgo}</span>
        <p className="description">{description}</p>
        <span className="created-day">{createdDay}</span>
      </div>
    </Link>
  );
}
