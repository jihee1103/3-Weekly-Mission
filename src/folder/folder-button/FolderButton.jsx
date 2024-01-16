import "./FolderButton.css";

export const FolderButton = ({ text, onClick, isSelected = false }) => {
  return (
    <button className={`Folder-button ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
