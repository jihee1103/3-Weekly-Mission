import SearchBar from "./SearchBar";
import CardList from "./CardList";
import "../styles/Content.css";

function Content() {
  return (
    <div className="wrap">
      <div className="spacing">
        <SearchBar></SearchBar>
        <CardList></CardList>
      </div>
    </div>
  );
}

export default Content;
