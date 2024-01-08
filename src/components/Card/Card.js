import timeDifferenceCalculate from "../../utils/timeDifferenceCalculate";
import "./Card.css";

function Card({ page }) {
  const link = page.url;
  const image = page.imageSource || page["image_source"];
  const description = page.description;

  const logo = "./images/logo.svg";
  const divClass = image ? "image" : "image default";
  const imgClass = image ? "preview" : "preview default-image";

  const upload = new Date(page.createdAt || page["created_at"]);
  const timeDiff = timeDifferenceCalculate(upload);

  const temp = upload.toLocaleDateString();
  const uploadDate = temp.slice(0, temp.length - 1);

  return (
    <a href={link} target="_blank" rel="noreferrer" className="card">
      <div className={divClass}>
        <img className={imgClass} src={image || logo} alt="페이지 미리보기" />
        <button>
          <img className="star" src="./images/star.png" alt="별 모양 아이콘" />
        </button>
      </div>
      <div className="card-info">
        <div className="time-difference">
          <span className="upload-ago">{timeDiff} ago</span>
          <button className="kebab">···</button>
        </div>
        <span className="description">{description}</span>
        <span className="upload-date">{uploadDate}</span>
      </div>
    </a>
  );
}

export default Card;
