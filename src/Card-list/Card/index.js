import { formatDate, returnUploadDate } from '../../utils';
import Kebab from '../../folder/kebab/index';
import './style.css';
import { useState } from 'react';

function Card({ link, isActive, onKebabToggle }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(!isVisible);
    onKebabToggle();
  };

  return (
    <>
      <a className="card" href={link.url} target="_blank" rel="noreferrer">
        <div className="card-link">
          <img
            className="card-image"
            src={link.image_source ? link.image_source : '/no-image.svg'}
            alt={link.title}
          />
        </div>
        <img src="/star.svg" width="34px" alt="즐겨찾기 아이콘" />
        <div className="container-text">
          <div>
            <p className="formatted-date">{formatDate(link)}</p>
            <button className="kebab" onClick={handleClick}>
              <img src="/kebab.svg" width="21px" alt="케밥 아이콘" />
            </button>
            {isActive && isVisible && <Kebab />}
          </div>
          <p className="description">{link.description}</p>
          <p className="current-date">{returnUploadDate(link)}</p>
        </div>
      </a>
    </>
  );
}

export default Card;
