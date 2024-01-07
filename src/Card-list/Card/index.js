import { formatDate, returnUploadDate } from '../../utils';
import './style.css';

function Card({ link }) {
  return (
    <a className="card" href={link.url} target="_blank" rel="noreferrer">
      <div className="card-link">
        <img
          className="card-image"
          src={link.image_source ? link.image_source : '/no-image.svg'}
          alt={link.title}
        />
      </div>
      <div className="container-text">
        <p className="formatted-date">{formatDate(link)}</p>
        <p className="description">{link.description}</p>
        <p className="current-date">{returnUploadDate(link)}</p>
      </div>
    </a>
  );
}

export default Card;
