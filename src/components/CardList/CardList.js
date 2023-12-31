import Card from './Card/Card';
import Search from './Search/Search';

const CardList = ({ linkData }) => {
  return (
    <div className="links">
      <Search className="links__search" />
      <Card linkData={linkData} className="links__card" />
    </div>
  );
};

export default CardList;
