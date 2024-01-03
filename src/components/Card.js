import "../styles/Card.css";
import noImg from "../assets/no-img.svg";
import { calElapsedTime } from "../utils/calElapsedTime";
import { calDate } from "../utils/calDate";

function Card({ cardList }) {
  return (
    <>
      {cardList.map((item) => (
        <div
          key={item.id}
          className="card-box"
          onClick={() => window.open(item.url)}
        >
          <div className="card-img-wrap">
            <img
              className="card-img"
              src={item.imageSource || noImg}
              alt="img"
            />
          </div>

          <div className="card-content">
            <div className="content-top">
              <span className="elapsed-time">
                {calElapsedTime(item.createdAt)}
              </span>
              {/* <img className="kebab"></img> */}
            </div>
            <div className="content-text">{item.title}</div>
            <div className="created-date">{calDate(item.createdAt)}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
