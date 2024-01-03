import { useCardProvider } from './context/card-provider';

const Description = ({ children, ...rest }) => {
  const { description } = useCardProvider();
  return <p {...rest}>{description || children}</p>;
};

export default Description;
