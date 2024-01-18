import { useState, useEffect } from "react";
import More from "./more";
import TimeAgo from "./MainFileTimeAgo";
import STAR_IMAGE from "../../assets/star.svg";
import KEBAB_IMAGE from "../../assets/kebab.svg"
import TEMP_IMAGE from "../../assets/logo.svg";

function File({ file }) {
  const { created_at, url, title, description, image_source } = file;
  const [kebabLoad, setKebabLoad] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  let year;
  let month;
  let date;
  let editedTime;

  useEffect(() => {
    setKebabLoad(false);         
  },[]);

  const handleClick = () => {
    window.open(url, "_blank");
  };

  const handleKebab = () => {
    setKebabLoad(!kebabLoad);
  };

  const handleLight = () => {
    setIsLightOn(!isLightOn);
  }

  year = new Date(created_at).getFullYear();
  month = new Date(created_at).getMonth();
  date = new Date(created_at).getDate();
  editedTime = year + "-" + (month + 1) + "-" + date;

  return (
    <div className="File">
      {isLightOn 
      ? 
      <img className="starOff" src={STAR_IMAGE} alt="즐겨찾기 추가하기" onClick={handleLight} />
      :
      <img className="starOn" src={STAR_IMAGE} alt="즐겨찾기 해제하기" onClick={handleLight} />
      }
      <div className="item01" onClick={handleClick}>
        <img
          className="fileImage"
          src={image_source === null ? TEMP_IMAGE : image_source}
          alt={title}
        />
      </div>
      <div className="item02">
        <img
          className="kebab"
          src={KEBAB_IMAGE}
          alt="더보기"
          onClick={handleKebab}
        />
        <TimeAgo className="timeAgo" time={created_at} />
        <div className="description">{description}</div>
        <div className="editTime">{editedTime}</div>
        {kebabLoad && <More />}
      </div>
    </div>
  );
}

export default function MainFiles({ folders }) {
  return (
    <div className="MainFiles">
      <div className="files">
        {folders.map((folder) => (
          <File file={folder} />
        ))}
      </div>
    </div>
  );
}
