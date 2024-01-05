import './Card.css';
import { useEffect, useState } from 'react';
import defaultImage from '../../asset/default-image.svg';
import calculateTime from '../../utils/calculateTime';
import starIcon from '../../asset/star.svg';
import kebabIcon from '../../asset/kebab.svg';

export default function Card({ link }) {
  const [formattedCreatedAt, setFormattedCreatedAt] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [cardImgUrl, setCardImgUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

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

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noreferrer"
      className="card-container"
    >
      <div className="card-img-area">
        <img
          src={cardImgUrl || defaultImage}
          className="card-preview-img"
          alt="카드 미리보기 이미지"
        />
        <img src={starIcon} alt="즐겨찾기 버튼" className="star-Icon" />
      </div>
      <div className="card-info-area">
        <div className="card-info-top">
          <p className="card-info-time">{elapsedTime}</p>
          <img src={kebabIcon} alt="더보기 아이콘" className="kebab-Icon" />
        </div>
        <p className="card-info-body">{link.description}</p>
        <p className="card-info-date">{formattedCreatedAt}</p>
      </div>
    </a>
  );
}
