export const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const afterTimeDate = (value) => {
  const currentDate = new Date();
  const createdDate = new Date(value);
  const diff = currentDate - createdDate;
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = 365 * DAY;

  const diffSec = Math.floor(diff / 1000);
  const diffMin = Math.floor(diff / (60 * 1000));
  const diffHour = Math.floor(diff / (60 * 60 * 1000));
  const diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
  const diffMonth = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
  const diffYear = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));

  if (diff < MINUTE) {
    return `${diffSec} second${diff < SECOND * 2 ? "" : "s"} ago`;
  }
  if (diff < HOUR) {
    return `${diffMin} minute${diff < MINUTE * 2 ? "" : "s"} ago`;
  }
  if (diff < DAY) {
    return `${diffHour} hour${diff < HOUR * 2 ? "" : "s"} ago`;
  }
  if (diff < MONTH) {
    return `${diffDate} day${diff < DAY * 2 ? "" : "s"} ago`;
  }
  if (diff < YEAR) {
    return `${diffMonth} month${diff < 2 * MONTH ? "" : "s"} ago`;
  }
  return `${diffYear} year${diff < YEAR * 2 ? "" : "s"} ago`;
};
