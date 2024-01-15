import "./CardImage.css";

const CardImage = function ({ isHovered, imageSource, title }) {
  const DEFAULT_IMAGE = "/img/no_image.png";
  const className = isHovered ? "CardImage zoomedCardImage" : "CardImage";

  return <div style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }} alt={title} className={className} />;
};

export default CardImage;
