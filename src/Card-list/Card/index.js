import noImag from '../images/no-image.svg';
import './style.css';
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
      return '1 minute ago';
    }

    if (diffInMinutes <= 59) {
      return `${diffInMinutes} minutes ago`;
    }

    if (diffInHours < 1) {
      return '1 hour ago';
    }

    if (diffInHours <= 23) {
      return `${diffInHours} hours ago`;
    }

    if (diffInDays < 1) {
      return '1 day ago';
    }

    if (diffInDays <= 30) {
      return `${diffInDays} days ago`;
    }

    if (diffInMonths < 1) {
      return '1 month ago';
    }

    if (diffInMonths <= 11) {
      return `${diffInMonths} months ago`;
    }

    if (diffInYears < 1) {
      return '1 year ago';
    }
    return `${Math.floor(diffInYears)} years ago`;
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

  return (
    <a className="card" href={url} target="_blank">
      <div className="card-link">
        <img className="card-image" src={noImag} alt="No Image" />
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
