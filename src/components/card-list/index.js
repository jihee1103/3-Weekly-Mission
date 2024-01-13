import { useState } from 'react';
import Card from './card';
import './style.css';

function CardList({ link }) {
  const [activeKebab, setActiveKebab] = useState(null);

  return (
    <>
      <div className="card-list">
        {link && link.length > 0 ? (
          link.map(link => {
            return (
              <Card
                key={link.id}
                link={link}
                isActive={activeKebab === link.id}
                onKebabToggle={() => setActiveKebab(link.id)}
              />
            );
          })
        ) : (
          <p className="no-link">저장된 링크가 없습니다.</p>
        )}
      </div>
    </>
  );
}

export default CardList;
