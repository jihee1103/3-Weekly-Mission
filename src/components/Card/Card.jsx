import React from "react";
import { getCreateDay, getTimeDifference } from "../../utils/util";
import defaultImg from "../../assets/images/1.png";
import starIcon from "../../assets/images/star.svg";
import { Link } from "react-router-dom";
import styled from "./Card.module.css";
import Kebab from "../Kebab/Kebab";

export default function Card({ item, toggle }) {
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
    <>
      <Link to={url} rel="noreferrer noopener" target="_blank">
        <img className={styled["main-img"]} src={imgSource} alt={imgAlt} />
      </Link>
      {toggle && (
        <img className={styled.star} src={starIcon} alt="별모양 아이콘" />
      )}
      <div className={styled["card-info"]}>
        {toggle && <Kebab />}
        <span className={styled["time-ago"]}>{timeAgo}</span>
        <p className={styled.description}>{description}</p>
        <span className={styled["created-day"]}>{createdDay}</span>
      </div>
    </>
  );
}
