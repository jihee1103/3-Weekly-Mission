import setPassedTime from "../../utils/setPassedTime";
import "./CardList.css";

const CardList = ({ cardList }) => {
  function createDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  }

  return (
    <div className="cardList">
      {cardList.map((item) => (
        <div className="card" onClick={() => window.open(item.url)}>
          <img
            className="cardImg"
            src={item.imageSource}
            alt="카드 이미지"
          ></img>
          <div className="cardBottom">
            <div>
              <p className="time">{setPassedTime(item.createdAt)}</p>
              <p className="cardText">{item.description}</p>
              <p className="createdDate">{createDate(item.createdAt)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
