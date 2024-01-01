import "./style.css";
import { formatDate, writtenDate } from "../../utils";
import noImage from "../../assets/no-image.png";

const handleLinkClick = (event, url) => {
  event.preventDefault();
  window.open(url);
};

const FolderLinks = ({ links, className = "" }) => {
  const classNames = `FolderLinks ${className}`;

  return (
    <ul className={classNames}>
      {links.map((link) => (
        <li key={link.id}>
          <FolderLinkCard link={link} />
        </li>
      ))}
    </ul>
  );
};

const FolderLinkCard = ({ link }) => {
  const { createdAt, url, title, description, imageSource = noImage } = link;
  return (
    <>
      <div className="folder-link-box" onClick={(event) => handleLinkClick(event, url)}>
        <div className="link-image-box">
          <img className="link-image" src={imageSource} alt={title} />
        </div>
        <div className="link-description-box">
          <div className="written-date">{writtenDate(createdAt)}</div>
          <div className="description">{description}</div>
          <div className="format-date">{formatDate(createdAt)}</div>
        </div>
      </div>
    </>
  );
};

export default FolderLinks;
