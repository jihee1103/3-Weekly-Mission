import CardImage from "./CardImage";
import CardContent from "./CardContent";
import "./Card.css";
import { useState } from "react";
import getElapsedTime from "../utils/getElapsedTime";

const Card = function ({ item }) {
  const { id, createdAt, description, imageSource, url } = item;
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
      <CardImage isHovered={isHovered} imageSource={imageSource} />
      <CardContent
        id={id}
        elapsedTime={getElapsedTime({ createdAt })}
        description={description}
        createdAt={createdAt}
      />
    </div>
  );
};

export default Card;
