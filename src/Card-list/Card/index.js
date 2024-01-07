import { formatDate, returnUploadDate } from '../../utils';
import './style.css';

function Card({ link }) {
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
            <button>
              <img src="/kebab.svg" width="21px" alt="케밥 아이콘" />
            </button>
          </div>
          <p className="description">{link.description}</p>
          <p className="current-date">{returnUploadDate(link)}</p>
        </div>
      </a>
    </>
  );
}

export default Card;
