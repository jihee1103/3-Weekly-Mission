import noImage from '../images/no-image.svg';
import './style.css';
import { TIMES } from '../../constant';
import React, { useState, useEffect } from 'react';

function Card() {
  const [createdAt, setCreatedAt] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const formatDate = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInMilliseconds = now - created;
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInMinutes < 2) {
      return TIMES.ONE_MINUTE_AGO;
    }

    if (diffInMinutes <= 59) {
      return diffInMinutes + TIMES.MINUTES_AGO;
    }

    if (diffInHours < 1) {
      return TIMES.ONE_HOUR_AGO;
    }

    if (diffInHours <= 23) {
      return diffInHours + TIMES.HOURS_AGO;
    }

    if (diffInDays < 1) {
      return TIMES.ONE_DAY_AGO;
    }

    if (diffInDays <= 30) {
      return diffInDays + TIMES.DAYS_AGO;
    }

    if (diffInMonths < 1) {
      return TIMES.ONE_MONTH_AGO;
    }

    if (diffInMonths <= 11) {
      return diffInMonths + TIMES.MINUTES_AGO;
    }

    if (diffInYears < 1) {
      return TIMES.ONE_YEAR_AGO;
    }
    return Math.floor(diffInYears) + TIMES.YEARS_AGO;
  };

  useEffect(() => {
    const currentDate = new Date();
    setCreatedAt(currentDate);
  }, []);

  useEffect(() => {
    if (createdAt) {
      const formatted = formatDate(createdAt);
      setFormattedDate(formatted);

      const now = new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setCurrentDate(now);
    }
  }, [createdAt]);

  const url = '';
  const imageUrl = '';

  return (
    <a className="card" href={url} target="_blank">
      <div className="card-link">
        {imageUrl ? (
          <img className="card-image" src={imageUrl} alt="No Image" />
        ) : (
          <img className="card-image" src={noImage} alt="No Image" />
        )}
      </div>
      <div className="container-text">
        <p className="formatted-date">{formattedDate}</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd
        </p>
        <p className="current-date">{currentDate}</p>
      </div>
    </a>
  );
}

export default Card;
