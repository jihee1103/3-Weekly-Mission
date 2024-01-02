import Description from './Description';
import CreatedAt from './CreatedAt';
import CardImage from './CardImage';
import CardCover from './CardCover';
import CardProvider from './context/card-provider';
import TimeElapsed from './TimeElapsed';

const CardWrapper = Object.assign(CardProvider, {
  Description,
  CreatedAt,
  CardImage,
  TimeElapsed,
  CardCover,
});

export default CardWrapper;
