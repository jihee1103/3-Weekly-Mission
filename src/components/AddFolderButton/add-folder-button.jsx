import addButton from "./add.svg";
import "./add-folder-button-style.css";

export function AddFolderButton() {
  return (
    <div className="add-folder-section">
      <h4 className="add-folder-font">폴더 추가</h4>
      <img className="add-folder-button" src={addButton} />
    </div>
  );
}
