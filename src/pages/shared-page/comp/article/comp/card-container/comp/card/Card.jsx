import CardWrapper from '../../../../../../../../components/ui/molecules/card/linkCard';
import './Card.css';

const Card = ({ link }) => {
  return (
    <CardWrapper {...link}>
      <CardWrapper.CardCover asAnchor className='link-card'>
        <div className='card-image-box'>
          <CardWrapper.CardImage className='link-image' alt={'카드 링크 이미지'} />
        </div>
        <div className='link-text-box'>
          <CardWrapper.TimeElapsed className='link-timeAgo' />
          <CardWrapper.Description className='link-description' />
          <CardWrapper.CreatedAt className='link-createdAt' />
        </div>
      </CardWrapper.CardCover>
    </CardWrapper>
  );
};
export default Card;
