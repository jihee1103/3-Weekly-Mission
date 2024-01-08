import Description from './Description';
import CreatedAt from './CreatedAt';
import CardImage from './CardImage';
import CardCover from './CardCover';
import CardProvider from './context/CardProvider';
import TimeElapsed from './TimeElapsed';
import Bookmark from './Bookmark';

const CardWrapper = Object.assign(CardProvider, {
  Description,
  CreatedAt,
  CardImage,
  TimeElapsed,
  CardCover,
  Bookmark,
});

export default CardWrapper;
