import { getTimeDiff } from '../../../../../lib/utils/time/getTimeDiff';
import { useCardProvider } from './context/card-provider';

const TimeElapsed = ({ children, ...rest }) => {
  const { createdAt } = useCardProvider();
  const timeDiffMsg = getTimeDiff(createdAt);
  return <span {...rest}>{timeDiffMsg}</span>;
};
export default TimeElapsed;
