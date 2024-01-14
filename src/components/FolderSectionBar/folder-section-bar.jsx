import "./folder-section-bar-style.css";

export function FolderSectionBar({ name, onClick }) {
  return (
    <>
      <button className="filter-button" onClick={onClick}>
        {name}
      </button>
    </>
  );
}
