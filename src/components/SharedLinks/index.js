import "./style.css";
import { formatDate, afterTimeDate } from "../../utils";
import noImage from "../../assets/no-image.png";

const SharedLinks = ({ links, className = "" }) => {
  const classNames = `SharedLinks ${className}`;
  return (
    <ul className={classNames}>
      {links.map((link) => (
        <li key={link.id}>
          <SharedLinkCard link={link} />
        </li>
      ))}
    </ul>
  );
};

const SharedLinkCard = ({ link }) => {
  const { createdAt, url, title, description, imageSource = noImage } = link;

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(url);
  };

  return (
    <a href={url} className="shared-link-box" onClick={handleLinkClick}>
      <div className="link-image-box">
        <img className="link-image" src={imageSource} alt={title} />
      </div>
      <div className="link-description-box">
        <div className="written-date">{afterTimeDate(createdAt)}</div>
        <div className="description">{description}</div>
        <div className="format-date">{formatDate(createdAt)}</div>
      </div>
    </a>
  );
};

export default SharedLinks;
