import "./CardList.css";

const CardList = ({ cardList }) => {
  function createDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  }

  const passedTime = (createdTime) => {
    const currentDate = new Date();
    const createdDate = new Date(createdTime);
    const timeDifference = Math.floor(
      (currentDate - createdDate) / (60 * 1000)
    );

    if (timeDifference < 2) {
      return "1 minute ago";
    } else if (timeDifference < 59) {
      return `${timeDifference} minutes ago`;
    } else if (timeDifference < 60 * 24) {
      const hours = Math.floor(timeDifference / 60);
      return `${hours} hours ago`;
    } else if (timeDifference < 60 * 24 * 30) {
      const days = Math.floor(timeDifference / (60 * 24));
      return `${days} days ago`;
    } else if (timeDifference < 60 * 24 * 30 * 12) {
      const months = Math.floor(timeDifference / (60 * 24 * 30));
      return `${months} months ago`;
    } else {
      const years = Math.floor(timeDifference / (60 * 24 * 30 * 12));
      return `${years} years ago`;
    }
  };

  return (
    <div className="cardList">
      {cardList.map((item) => (
        <div className="card" onClick={() => window.open(item.url)}>
          <img className="cardImg" src={item.imageSource}></img>
          <div className="cardBottom">
            <div>
              <h1 className="time">{passedTime(item.createdAt)}</h1>
              <h2 className="cardText">{item.description}</h2>
              <h1 className="createdDate">{createDate(item.createdAt)}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
