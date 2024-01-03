import "./Card.css";
import defaultImage from "../../asset/default-image.svg";
import { useEffect, useState } from "react";
import calculateTime from "../../utils/calculateTime";

export default function Card({ link }) {
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [elapsedTime, setElapsedTime] = useState("");
  const [cardImgUrl, setCardImgUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const updateFormattedCreatedAt = (dateTimeString) => {
    const formattedDateTime = new Date(dateTimeString);

    const year = formattedDateTime.getFullYear();
    const month = formattedDateTime.getMonth() + 1;
    const day = formattedDateTime.getDate();

    setFormattedCreatedAt(`${year}. ${month}. ${day}`);
  };

  useEffect(() => {
    const formattedElapsedTime = calculateTime(link.createdAt);

    setElapsedTime(formattedElapsedTime);
    setLinkUrl(link.url);
    setCardImgUrl(link.imageSource);
    updateFormattedCreatedAt(link.createdAt);
  }, [link]);

  const handleCardClick = (link) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div
      className="card-container"
      onClick={handleCardClick}
    >
      <div className="card-img-area">
        <img
          src={cardImgUrl ? cardImgUrl : defaultImage}
          alt="카드 미리보기 이미지"
        />
      </div>
      <div className="card-info-area">
        <p className="card-info-time">{elapsedTime}</p>
        <p className="card-info-body">{link.description}</p>
        <p className="card-info-date">{formattedCreatedAt}</p>
      </div>
    </div>
  );
}
