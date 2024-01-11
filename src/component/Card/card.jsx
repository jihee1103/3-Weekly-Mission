import "./card-style.css";

export function Card({ imageSource, description, createdAt, url }) {
  const myDate = new Date(createdAt);
  return (
    <>
      <a href={url} target="_blank" className="card-url">
        <div className="card-container">
          <div className="image-wrap">
            <div className="image-container">
              <img src={imageSource} />
            </div>
          </div>
          <div className="card-content">
            <div className="card-description">
              <p className="time-stamp-section">{createdAt}</p>
              <p className="description-section">{description}</p>
              <div className="time-section">
                <p>{myDate.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
