import CardImage from "./CardImage";
import CardContent from "./CardContent";
import "./Card.css";
import { useState } from "react";
import getElapsedTime from "../utils/getElapsedTime";
import timeFormatter from "../utils/timeFormatter";

const Card = function ({ item }) {
  const { createdAt, created_at, description, imageSource, image_source, url } = item;
  const [isHovered, setIsHoverd] = useState(false);

  const handleMouseOver = () => setIsHoverd(true);
  const handleMouseLeave = () => setIsHoverd(false);
  const handleOnClick = () => {
    window.open(url);
  };

  return (
    <div
      className={isHovered ? "Card Hovered" : "Card"}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}>
      <CardImage isHovered={isHovered} imageSource={imageSource || image_source} />

      <CardContent
        elapsedTime={getElapsedTime(createdAt || created_at)}
        description={description}
        createdAt={timeFormatter(createdAt || created_at)}
      />
      <img className="star" src="/img/star_icon.svg" alt="즐겨찾기" />
      <img className="kebab" src="/img/kebab_icon.svg" alt="케밥아이콘" />
    </div>
  );
};

export default Card;
