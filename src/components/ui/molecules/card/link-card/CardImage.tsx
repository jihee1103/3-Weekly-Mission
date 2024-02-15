import { useCardProvider } from './context/CardProvider';

type TCardImageProps = {
  alt: string;
  className?: string;
};

const CardImage = ({ alt, ...rest }: TCardImageProps) => {
  const { imageSource } = useCardProvider();
  const altImage = `/images/shared/no-image.svg`;

  return <img alt={alt} src={imageSource || altImage} {...rest} />;
};

export default CardImage;
