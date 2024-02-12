import "./style.css";
import link from "../../assets/link.svg";

const AddLinkBar = () => {
  return (
    <div className="AddLinkBar">
      <img className="AddLinkBar-icon" src={link} alt="검색 링크 아이콘" />
      <input className="AddLinkBar-input" placeholder="링크를 추가해 보세요" />
      <button className="AddLinkBar-button">추가하기</button>
    </div>
  );
};

export default AddLinkBar;
