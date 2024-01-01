import logo from "../images/logo.svg";
import { useState, useEffect } from "react";
import timeDifferenceCalculate from "../timeDifferenceCalculate";
import "../Card.css";

function Card({ page }) {
  const [link, setLink] = useState(page.url);
  const [image, setImage] = useState(page.imageSource);
  const [description, setDescription] = useState(page.description);
  const [timeDiff, setTimeDiff] = useState("");
  const [uploadDate, setUploadDate] = useState("");

  const upload = new Date(page.createdAt);

  useEffect(() => {
    const nextTimeDiff = timeDifferenceCalculate(upload);
    setTimeDiff(nextTimeDiff);

    const temp = upload.toLocaleDateString();
    const nextUploadDate = temp.slice(0, temp.length - 1);

    setUploadDate(nextUploadDate);
  }, [timeDiff, uploadDate]);

  return (
    <a href={link} target="_blank" className="card">
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
