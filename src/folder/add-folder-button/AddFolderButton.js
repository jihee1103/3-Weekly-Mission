import { ReactComponent as AddIcon } from "./add.svg";
import "./AddFolderButton.css";

export const AddFolderButton = ({ onClick }) => {
  return (
    <button className="AddFolderButton" onClick={onClick}>
      <span>폴더추가</span>
      <AddIcon className="Icon" />
    </button>
  );
};
