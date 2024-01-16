import LinkCard from '@components/ui/molecules/card/link-card';

import styles from './Card.module.css';

const Card = ({ link }) => {
  return (
    <LinkCard {...link}>
      <LinkCard.CardCover asAnchor className={styles['link-card']}>
        <div className={styles['card-image-box']}>
          <LinkCard.CardImage className={styles['link-image']} alt='카드 링크 이미지' />
        </div>
        <div className={styles['link-text-box']}>
          <LinkCard.TimeElapsed className={styles['link-elapsed']} />
          <LinkCard.Description className={styles['link-description']} />
          <LinkCard.CreatedAt className={styles['link-createdAt']} />
        </div>
      </LinkCard.CardCover>
    </LinkCard>
  );
};

export default Card;
