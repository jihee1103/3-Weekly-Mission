import { useState } from "react";
import { Card } from "../../sharing/card/Card/Card";
import { CardImage } from "../../sharing/card/CardImage/CardImage";
import { CardContent } from "../../sharing/card/CardContent/CardContent";
import "./EditableCard.css";

export const EditableCard = ({ url, imageSource, alt, elapsedTime, description, createdAt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button className="Star" onClick={(event) => event.preventDefault()}>
          <img src="images/star.svg" alt="즐겨찾기 별" />
        </button>
        <button className="Kebab" onClick={(event) => event.preventDefault()}>
          <img src="images/kebab.svg" alt="더보기 점 3개" />
        </button>
      </Card>
    </a>
  );
};
