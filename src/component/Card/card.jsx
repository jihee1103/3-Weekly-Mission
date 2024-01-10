import "./card-style.css";

export function Card({ imageSource, description, createdAt, url }) {
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
              <div className="description-section">
                <p>{description}</p>
              </div>
              <div className="time-section">
                <p>{createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
