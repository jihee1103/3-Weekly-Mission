import "./style.css";
import { formatDate, afterTimeDate } from "../../utils";
import noImage from "../../assets/no-image.png";
import kebab from "../../assets/kebab.svg";
import star from "../../assets/star.svg";
import { MouseEvent } from "react";
import { Link } from "../../types";

interface FolderItemProps {
  link: Link;
}

const FolderItem = ({ link }: FolderItemProps) => {
  const { created_at, url, title, description, image_source = noImage } = link;

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(url);
  };

  return (
    <a href={url} className="FolderItem-link-box" onClick={handleLinkClick}>
      <div className="link-image-box">
        <img className="link-image" src={image_source} alt={title} />
      </div>
      <div className="link-description-box">
        <div className="written-date">{afterTimeDate(created_at)}</div>
        <div className="description">{description}</div>
        <div className="format-date">{formatDate(created_at)}</div>
      </div>
      <img className="kebab" src={kebab} alt="삭제하기와 폴더 추가 기능이 있는 케밥 아이콘" />
      <img className="star" src={star} alt="즐겨찾기 아이콘" />
    </a>
  );
};

export default FolderItem;
