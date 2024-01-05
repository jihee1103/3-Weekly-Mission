import { calElapsedTime } from "../../utils/calElapsedTime";
import { calDate } from "../../utils/calDate";
import "./Card.css";

function Card({ link }) {
  return (
    <div className="card-box" onClick={() => window.open(link.url)}>
      <div className="card-img-wrap">
        {link.imageSource ? (
          <img className="card-img" src={link.imageSource} alt="img" />
        ) : (
          <img className="card-img" src="./assets/no-img.svg" alt="img" />
        )}
      </div>

      <div className="card-content">
        <div className="content-top">
          <span className="elapsed-time">{calElapsedTime(link.createdAt)}</span>
          {/* <img className="kebab"></img> */}
        </div>
        <div className="content-text">{link.title}</div>
        <div className="created-date">{calDate(link.createdAt)}</div>
      </div>
    </div>
  );
}

export default Card;
