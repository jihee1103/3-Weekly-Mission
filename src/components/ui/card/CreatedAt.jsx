import { formatDate } from '../../../lib/utils/timer';
import { useCardProvider } from './context/card-provider';

const CreatedAt = ({ children, ...rest }) => {
  const { createdAt } = useCardProvider();
  const formattedTime = formatDate(createdAt);

  return <span {...rest}>{formattedTime}</span>;
};

export default CreatedAt;
