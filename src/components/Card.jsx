import "../css/Card.css";
import noImg from "../asset/noimage.svg";
import { useEffect, useState } from "react";

export default function Card({ link }) {
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [elapsedTime, setElapsedTime] = useState("");
  const [cardImgUrl, setCardImgUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  useEffect(() => {
    const calculateTime = (createdAt) => {
      const createdTime = new Date(createdAt);
      const now = new Date();

      const year = createdTime.getFullYear();
      const month = createdTime.getMonth() + 1;
      const day = createdTime.getDate();

      const timeDifferenceSeconds = Math.floor((now.getTime() - createdTime.getTime()) / 1000);
      const timeDifferenceMinutes = Math.floor(timeDifferenceSeconds / 60);
      const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
      const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
      const timeDifferenceMonths = Math.floor(timeDifferenceDays / 31);
      const timeDifferenceYears = Math.floor(timeDifferenceMonths / 12);

      // 경과 시간 설정
      if (timeDifferenceMinutes < 2) setElapsedTime(`1 minute ago`);
      else if (timeDifferenceMinutes <= 59) setElapsedTime(`${timeDifferenceMinutes} minutes ago`);
      else if (timeDifferenceMinutes >= 60 && timeDifferenceMinutes < 120)
        setElapsedTime(`1 hour ago`);
      else if (timeDifferenceHours <= 23) setElapsedTime(`${timeDifferenceHours} hours ago`);
      else if (timeDifferenceHours >= 24 && timeDifferenceDays < 2) setElapsedTime(`1 day ago`);
      else if (timeDifferenceDays <= 30) setElapsedTime(`${timeDifferenceDays} days ago`);
      else if (timeDifferenceDays >= 31 && timeDifferenceMonths < 2) setElapsedTime(`1 month ago`);
      else if (timeDifferenceMonths <= 11) setElapsedTime(`${timeDifferenceMonths} months ago`);
      else if (timeDifferenceMonths >= 12 && timeDifferenceYears < 2) setElapsedTime(`1 year ago`);
      else setElapsedTime(`${timeDifferenceYears} years ago`);

      setFormattedCreatedAt(`${year}. ${month}. ${day}`);
    };

    setLinkUrl(link.url);
    setCardImgUrl(link.imageSource);
    calculateTime(link.createdAt);
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
          src={cardImgUrl ? cardImgUrl : noImg}
          alt="noimg"
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
