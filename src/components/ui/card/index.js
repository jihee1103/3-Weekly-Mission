import CardImage from './CardImage';
import CreatedAt from './CreatedAt';
import Description from './Description';
import CardProvider from './context/card-provider';
import TimeElapsed from './TimeElapsed';
import CardCover from './CardCover';

const CardWrapper = Object.assign(CardProvider, {
  Description,
  CreatedAt,
  CardImage,
  TimeElapsed,
  CardCover,
});

export default CardWrapper;
