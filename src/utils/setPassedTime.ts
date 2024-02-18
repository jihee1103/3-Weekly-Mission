const setPassedTime = (createdTime: string) => {
  const currentDate = new Date();
  const createdDate = new Date(createdTime);
  const timeDifference = Math.floor(
    (currentDate.getTime() - createdDate.getTime()) / (60 * 1000)
  );

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = 365 * DAY;

  const diffMin = Math.floor(timeDifference / (60 * 1000));
  const diffHour = Math.floor(timeDifference / (60 * 60 * 1000));
  const diffDate = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const diffMonth = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
  const diffYear = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));

  if (timeDifference < MINUTE) {
    return `${diffMin} second${timeDifference < SECOND * 2 ? "" : "s"} ago`;
  }
  if (timeDifference < HOUR) {
    return `${diffMin} minute${timeDifference < MINUTE * 2 ? "" : "s"} ago`;
  }
  if (timeDifference < DAY) {
    return `${diffHour} hour${timeDifference < HOUR * 2 ? "" : "s"} ago`;
  }
  if (timeDifference < MONTH) {
    return `${diffDate} day${timeDifference < DAY * 2 ? "" : "s"} ago`;
  }
  if (timeDifference < YEAR) {
    return `${diffMonth} month${timeDifference < 2 * MONTH ? "" : "s"} ago`;
  }
  return `${diffYear} year${timeDifference < YEAR * 2 ? "" : "s"} ago`;
};

export default setPassedTime;
