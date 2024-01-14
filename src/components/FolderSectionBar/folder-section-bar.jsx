import "./folder-section-bar-style.css";

export function FolderSectionBar({ name, onClick }) {
  return (
    <div className="filter-section-container">
      <button className="filter-button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
