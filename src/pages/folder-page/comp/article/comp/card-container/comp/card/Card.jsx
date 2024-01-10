import LinkCard from '@components/ui/molecules/card/link-card';
import './Card.css';

const Card = ({ link }) => {
  return (
    <LinkCard {...link}>
      <LinkCard.CardCover asAnchor className='link-card'>
        <div className='card-image-box'>
          <LinkCard.CardImage className='link-image' alt='카드 링크 이미지' />
          <LinkCard.Bookmark />
        </div>
        <div className='link-text-box'>
          <div className='justify-between'>
            <LinkCard.TimeElapsed className='link-elapsed' />
            <button type='button' className='link-kebab-btn'>
              <img
                className='link-kebab-btn-image'
                src={`${process.env.PUBLIC_URL}/images/folder/kebab.svg`}
                alt='카드 케밥 버튼'
              />
            </button>
          </div>
          <LinkCard.Description className='link-description' />
          <LinkCard.CreatedAt className='link-createdAt' />
        </div>
      </LinkCard.CardCover>
    </LinkCard>
  );
};
export default Card;
