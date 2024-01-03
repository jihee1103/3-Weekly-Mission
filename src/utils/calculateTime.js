const calculateTime = (createdAt) => {
  const createdTime = new Date(createdAt);
  const now = new Date();

  const timeDifferenceSeconds = Math.floor((now.getTime() - createdTime.getTime()) / 1000);
  const timeDifferenceMinutes = Math.floor(timeDifferenceSeconds / 60);
  const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
  const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
  const timeDifferenceMonths = Math.floor(timeDifferenceDays / 31);
  const timeDifferenceYears = Math.floor(timeDifferenceMonths / 12);

  // 경과 시간 설정
  if (timeDifferenceMinutes < 2) {
    return `1 minute ago`;
  }
  if (timeDifferenceHours < 1) {
    return `${timeDifferenceMinutes} minutes ago`;
  }
  if (timeDifferenceHours < 2) {
    return `1 hour ago`;
  }
  if (timeDifferenceDays < 1) {
    return `${timeDifferenceHours} hours ago`;
  }
  if (timeDifferenceDays < 2) {
    return `1 day ago`;
  }
  if (timeDifferenceMonths < 1) {
    return `${timeDifferenceDays} days ago`;
  }
  if (timeDifferenceMonths < 2) {
    return `1 month ago`;
  }
  if (timeDifferenceYears < 1) {
    return `${timeDifferenceMonths} months ago`;
  }
  if (timeDifferenceYears < 2) {
    return `1 year ago`;
  }

  return `${timeDifferenceYears} years ago`;
};

export default calculateTime;
