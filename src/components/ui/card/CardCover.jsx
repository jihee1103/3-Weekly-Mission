import { useCardProvider } from './context/card-provider';

const CardCover = ({ children, ...rest }) => {
  const { url } = useCardProvider();
  const onClickHandler = () => {
    window.location.href = url;
  };
  return (
    <div {...rest} onClick={onClickHandler}>
      {children}
    </div>
  );
};
export default CardCover;
