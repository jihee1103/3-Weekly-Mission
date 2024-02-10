import "./style.css";
import { formatDate, afterTimeDate } from "../../utils";
import noImage from "../../assets/no-image.png";
import { SampleFolderLink } from "../../types";
import { MouseEvent } from "react";

interface SharedLinksProps {
  sharedPageLinks: SampleFolderLink[];
  className?: string;
}

const SharedLinks = ({ sharedPageLinks, className = "" }: SharedLinksProps) => {
  const classNames = `SharedLinks ${className}`;
  return (
    <ul className={classNames}>
      {sharedPageLinks &&
        sharedPageLinks.map((link: SampleFolderLink) => (
          <li key={link.id}>
            <SharedLinkCard link={link} />
          </li>
        ))}
    </ul>
  );
};

interface SharedLinkCardProps {
  link: SampleFolderLink;
}

const SharedLinkCard = ({ link }: SharedLinkCardProps) => {
  const { createdAt, url, title, description, imageSource = noImage } = link;

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
