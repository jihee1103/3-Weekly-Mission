import "./Card.css";
import logo from "../../images/logo.svg";

const DEFAULT_CARD_VALUE = {
  createdAt: "10minutes ago",
  description: "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd",
  uploadDate: "2023.3.15",
};

function Card({ image = logo, createdAt = DEFAULT_CARD_VALUE.createdAt, description = DEFAULT_CARD_VALUE.description, uploadDate = DEFAULT_CARD_VALUE.uploadDate, style }) {
  return (
    <article className="card">
      <div className="image-box">
        <img src={image} alt="cardImage" style={style} />
      </div>
      <div className="text-box">
        <h5>{createdAt}</h5>
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>
    </article>
  );
}

export default Card;
