const getTimeDiff = time => {
  const currentTime = Date.now();
  const targetTime = new Date(time).getTime();

  const timeDiffInMs = Math.abs(targetTime - currentTime);
  const timeDiffInSec = Math.floor(timeDiffInMs / 1000);
  const timeDiffInMin = Math.floor(timeDiffInSec / 60);
  const timeDiffInHour = Math.floor(timeDiffInMin / 60);
  const timeDiffInDay = Math.floor(timeDiffInHour / 24);
  const timeDiffInMonth = Math.floor(timeDiffInDay / 31);
  const timeDiffInYear = Math.floor(timeDiffInMonth / 12);

  if (timeDiffInMin < 2) return '1 minute ago';
  if (timeDiffInMin <= 59) return `${timeDiffInMin.toString().padStart(2, '0')} minutes ago`;
  if (timeDiffInMin <= 60) return '1 hour ago';
  if (timeDiffInHour <= 23) return `${timeDiffInHour.toString().padStart(2, '0')} hours ago`;
  if (timeDiffInHour <= 24) return '1 day ago';
  if (timeDiffInDay <= 30) return `${timeDiffInDay.toString().padStart(2, '0')} days ago`;
  if (timeDiffInDay <= 31) return '1 month ago';
  if (timeDiffInMonth <= 11) return `${timeDiffInMonth.toString().padStart(2, '0')} months ago`;
  if (timeDiffInMonth <= 12) return '1 year ago';
  return `${timeDiffInYear.toString().padStart(2, '0')} years ago`;
};

const formatDate = time => {
  const date = new Date(time);

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
  return `${year}. ${month}. ${day}`;
};

export { getTimeDiff, formatDate };
