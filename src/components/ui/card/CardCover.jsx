import { useCardProvider } from './context/card-provider';

const Slot = ({ children, ...rest }) => {
  return (
    <a rel='noopener noreferrer' {...rest}>
      {children}
    </a>
  );
};

const CardCover = ({ children, asAnchor = false, ...rest }) => {
  const { url } = useCardProvider();
  const onClickHandler = () => {
    window.open(url, '_blank');
  };
  const Comp = asAnchor ? Slot : 'div';

  return (
    <Comp {...rest} onClick={onClickHandler}>
      {children}
    </Comp>
  );
};
export default CardCover;
