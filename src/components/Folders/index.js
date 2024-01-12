import "./style.css";
import { formatDate, afterTimeDate } from "../../utils";
import noImage from "../../assets/no-image.png";

const FolderItem = ({ link }) => {
  const { created_at, url, title, description, image_source = noImage } = link;

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(url);
  };

  return (
    <a href={url} className="FolderItem-link-box" onClick={handleLinkClick}>
      <div className="link-image-box">
        <img className="link-image" src={image_source} alt={title} />
      </div>
      <div className="link-description-box">
        <div className="written-date">{afterTimeDate(created_at)}</div>
        <div className="description">{description}</div>
        <div className="format-date">{formatDate(created_at)}</div>
      </div>
    </a>
  );
};

export default FolderItem;
