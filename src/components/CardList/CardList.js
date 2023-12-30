import Card from "./Card/Card.js";
import Search from "./Search/Search.js";

const CardList = ({ linkData }) => {
    return (
        <div className="links">
            <Search />
            <Card linkData={linkData} />
        </div>
    );
};

export default CardList;
