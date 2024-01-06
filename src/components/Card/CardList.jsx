import convertKeyToCamelCase from '../../utils/convertToCamelCase';
import Card from './Card';
import './CardList.css';

export default function CardList({ links }) {
  return (
    <div className="card-box">
      {links.map((link) => {
        const newLink = convertKeyToCamelCase(link);
        return <Card key={newLink.id} link={newLink} />;
      })}
    </div>
  );
}
