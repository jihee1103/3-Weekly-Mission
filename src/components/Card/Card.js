import timeDifferenceCalculate from "../../utils/timeDifferenceCalculate";
import "./Card.css";

function Card({ page }) {
  const link = page.url;
  const image = page.imageSource;
  const description = page.description;

  const logo = "./images/logo.svg";

  const upload = new Date(page.createdAt);
  const timeDiff = timeDifferenceCalculate(upload);

  const temp = upload.toLocaleDateString();
  const uploadDate = temp.slice(0, temp.length - 1);

  return (
    <a href={link} target="_blank" rel="noreferrer" className="card">
      {image ? (
        <div className="image">
          <img src={image || logo} alt="페이지 미리보기" />
        </div>
      ) : (
        <div className="image default">
          <img className="default-image" src={logo} alt="페이지 미리보기" />
        </div>
      )}
      <div className="card-info">
        <span className="upload">{timeDiff} ago</span>
        <span className="description">{description}</span>
        <span className="upload-date">{uploadDate}</span>
      </div>
    </a>
  );
}

export default Card;
