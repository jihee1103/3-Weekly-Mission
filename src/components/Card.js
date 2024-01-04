import noImgLogo from "../assets/no-img-logo.svg";
import calculateWhenItIsCreated from "../utils/calculateWhenItIsCreated";
import formatDate from "../utils/formatDate";
import "./Card.css";

export default function Card({ link }) {
  const { createdAt, url, description, imageSource } = link;
  const formattedDate = formatDate(createdAt);
  const timeAgo = calculateWhenItIsCreated(createdAt);
  
  const classNames = imageSource ? "card-img" : "card-img no-img"; 

  return (
    <a className="card" onClick={() => window.open(url, "_blank")}>
      <div className="card-img-container">
        <img className={classNames}  src={imageSource ?? noImgLogo} alt={link.title}/>
        
      </div>
      <div className="mention-wrapper">
        <p className="upload-time-ago">{timeAgo}</p>
        <p className="description">{description}</p>
        <p className="upload-date">{formattedDate}</p>
      </div>
    </a>
  );
}
