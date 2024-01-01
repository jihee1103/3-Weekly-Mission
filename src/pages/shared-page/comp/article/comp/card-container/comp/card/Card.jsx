import CardWrapper from '../../../../../../../../components/ui/card';
import './Card.css';

const Card = ({ link }) => {
  const { imageSource, createdAt, description, url } = link;

  return (
    <CardWrapper createdAt={createdAt} imageSource={imageSource} description={description} url={url}>
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
