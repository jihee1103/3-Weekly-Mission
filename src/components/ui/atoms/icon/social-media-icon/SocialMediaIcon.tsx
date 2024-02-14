export type TSocialMediaIcon = {
  href: string;
  imgSrc: string;
  imgAlt: string;
};

const SocialMediaIcon = ({ href, imgAlt, imgSrc }: TSocialMediaIcon) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <img alt={imgAlt} src={imgSrc} />
      </a>
    </li>
  );
};

export default SocialMediaIcon;
