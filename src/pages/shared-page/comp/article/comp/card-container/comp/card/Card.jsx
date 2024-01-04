import LinkCard from '../../../../../../../../components/ui/molecules/card/link-card';
import './Card.css';

const Card = ({ link }) => {
  return (
    <LinkCard {...link}>
      <LinkCard.CardCover asAnchor className='link-card'>
        <div className='card-image-box'>
          <LinkCard.CardImage className='link-image' alt={'카드 링크 이미지'} />
        </div>
        <div className='link-text-box'>
          <LinkCard.TimeElapsed className='link-elapsed' />
          <LinkCard.Description className='link-description' />
          <LinkCard.CreatedAt className='link-createdAt' />
        </div>
      </LinkCard.CardCover>
    </LinkCard>
  );
};
export default Card;
