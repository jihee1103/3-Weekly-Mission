import "./card-style.css";
import kebab from "./kebab.png";
import star from "./star.png";

export function Card({ imageSource, description, createdAt, url }) {
  const createdDate = new Date(createdAt);
  const timeDifference = Date.now() - createdDate.getTime();

  const minutes = Math.floor(timeDifference / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let timeStatus;

  if (minutes < 2) {
    timeStatus = "1 minute ago";
  } else if (minutes < 60) {
    timeStatus = `${minutes} minutes ago`;
  } else if (hours < 2) {
    timeStatus = "1 hour ago";
  } else if (hours < 24) {
    timeStatus = `${hours} hours ago`;
  } else if (days < 2) {
    timeStatus = "1 day ago";
  } else if (days < 31) {
    timeStatus = `${days} days ago`;
  } else if (months < 2) {
    timeStatus = "1 month ago";
  } else if (months < 12) {
    timeStatus = `${months} months ago`;
  } else if (years < 2) {
    timeStatus = "1 year ago";
  } else {
    timeStatus = `${Math.floor(months / 12)} years ago`;
  }

  return (
    <>
      <a href={url} target="_blank" className="card-url">
        <div className="card-container">
          <div className="image-wrap">
            <img src={star} className="star-icon" />
            <div className="image-container">
              <img src={imageSource} />
            </div>
          </div>
          <div className="card-content">
            <div className="card-description">
              <img src={kebab} className="kebab-icon" />
              <p className="time-stamp-section">{timeStatus}</p>
              <p className="description-section">{description}</p>
              <div className="time-section">
                <p>{createdDate.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
