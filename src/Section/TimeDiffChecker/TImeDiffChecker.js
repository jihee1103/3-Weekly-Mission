function getTimeDifference(time) {
  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const mon = day * 30;

  if (time < minute * 2) {
    return `1 minute ago`;
  } else if (time < minute * 59) {
    return `${Math.trunc(time / 60)} minutes ago`;
  } else if (time > minute * 60 && time < day) {
    return `${Math.trunc(time / 60 / 60)} hours ago`;
  } else if (time > day && time < day * 2) {
    return `1 day ago`;
  } else if (time < day * 30) {
    return `${Math.trunc(time / 60 / 60 / 24)} days ago`;
  } else if (time >= day * 30 && time < day * 60) {
    return `1 month ago`;
  } else if (time < mon * 12) {
    return `${Math.trunc(time / 60 / 60 / 24 / 30)} months ago`;
  } else if (time >= mon * 12 && time < mon * 24) {
    return `1 year ago`;
  } else if (time >= mon * 24) {
    return `${Math.trunc(time / 60 / 60 / 24 / 30 / 12)} years ago`;
  }
}

export default getTimeDifference;
