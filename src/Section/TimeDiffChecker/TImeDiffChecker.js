function getTimeDifference(time) {
  const SECOND = 1;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;

  if (time < MINUTE * 2) {
    return `1 minute ago`;
  } else if (time < MINUTE * 59) {
    return `${Math.trunc(time / 60)} minutes ago`;
  } else if (time > MINUTE * 60 && time < DAY) {
    return `${Math.trunc(time / 60 / 60)} hours ago`;
  } else if (time > DAY && time < DAY * 2) {
    return `1 day ago`;
  } else if (time < DAY * 30) {
    return `${Math.trunc(time / 60 / 60 / 24)} days ago`;
  } else if (time >= DAY * 30 && time < DAY * 60) {
    return `1 month ago`;
  } else if (time < MONTH * 12) {
    return `${Math.trunc(time / 60 / 60 / 24 / 30)} months ago`;
  } else if (time >= MONTH * 12 && time < MONTH * 24) {
    return `1 year ago`;
  } else if (time >= MONTH * 24) {
    return `${Math.trunc(time / 60 / 60 / 24 / 30 / 12)} years ago`;
  }
}

export default getTimeDifference;
