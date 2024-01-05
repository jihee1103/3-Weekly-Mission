import SearchBar from "../SearchBar/SearchBar";
import CardList from "../CardList/CardList";
import "./Content.css";

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
