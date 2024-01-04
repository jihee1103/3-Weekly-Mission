import "./Card.css";
import logo from "../../images/logo.svg";
import { useState } from "react";

const DEFAULT_CARD_VALUE = {
  createdAt: "10minutes ago",
  description: "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd",
  uploadDate: "2023.3.15",
};

function Card({ image = logo, createdAt = DEFAULT_CARD_VALUE.createdAt, description = DEFAULT_CARD_VALUE.description, uploadDate = DEFAULT_CARD_VALUE.uploadDate, style }) {
  const [isHover, setIsHover] = useState(false);
  const mouseOver = () => {
    setIsHover(true);
  };
  const mouseOut = () => {
    setIsHover(false);
  };

  return (
    <article className="card">
      <div className="image-box">
        <img src={image} alt="cardImage" style={style} onMouseOver={mouseOver} onMouseOut={mouseOut} className={isHover ? "growImg" : ""} />
      </div>
      <div className="text-box">
        <h5>{createdAt}</h5>
      </div>
      <div className="text-box">
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>
    </article>
  );
}

export default Card;
