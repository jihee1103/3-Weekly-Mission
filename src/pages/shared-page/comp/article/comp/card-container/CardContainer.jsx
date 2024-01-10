import Card from './comp/card/Card';
import './CardContainer.css';

const CardContainer = ({ links }) => {
  return (
    <section className='card-container'>
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </section>
  );
};
export default CardContainer;
