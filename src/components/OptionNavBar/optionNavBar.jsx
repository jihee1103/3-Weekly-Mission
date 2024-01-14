import share from "./share.svg";
import edit from "./pen.svg";
import trash from "./trash.svg";
import "./optionNavBar-style.css";

export function OptionNavBar({ name }) {
  return (
    <div className="option-section">
      <h3 className="option-title">{name}</h3>
      {name !== "전체" && (
        <div className="option-button-section">
          <img src={share} />
          <h4 className="share-button option-button-font">공유</h4>
          <img src={edit} />
          <h4 className="edit-button option-button-font">이름 변경</h4>
          <img src={trash} />
          <h4 className="delete-button option-button-font">삭제</h4>
        </div>
      )}
    </div>
  );
}
