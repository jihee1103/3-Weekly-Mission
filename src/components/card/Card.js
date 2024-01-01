// import { formatAgo } from "../utils/date";
import { getDiffTime, createdDate } from "../../utils/date";
import noImage from "../../images/noImage.svg";
import "./Card.css";

function Card({ link }) {
  const timeAgo = getDiffTime(link.createdAt);
  const createdDay = createdDate(link.createdAt);

  return (
    <div className="card-container">
      <div className="cardImg-wrap">
        {link.imageSource ? (
          <img src={link.imageSource} alt="card-img" />
        ) : (
          <img src={noImage} alt="no-image" />
        )}
      </div>
      <div className="card-content">
        <div className="card-timeAgo">{timeAgo}</div>
        <div className="card-desc">{link.description}</div>
        <div className="card-createdAt">{createdDay}</div>
      </div>
    </div>
  );
}

export default Card;
