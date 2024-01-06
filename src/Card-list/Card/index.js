import noImage from '../images/no-image.svg';
import './style.css';
import { formatDate, returnUploadDate } from '../../utils';

function Card({ link }) {
  return (
    <a className="card" href={link.url} target="_blank" rel="noreferrer">
      <div className="card-link">
        <img
          className="card-image"
          src={link.imageSource ? link.imageSource : noImage}
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
