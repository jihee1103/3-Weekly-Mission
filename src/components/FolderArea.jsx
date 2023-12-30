import Card from "./Card";
import SearchBar from "./SearchBar";
import "../css/FolderArea.css";

export default function FolderArea() {
  return (
    <div className="folder-container">
      <div className="contents-box">
        <SearchBar />
        <div className="card-box">
          <Card />
        </div>
      </div>
    </div>
  );
}
