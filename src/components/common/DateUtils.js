export function getTimeDifference(createdAt) {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();

  const timeDifferenceInSeconds = Math.floor(
    (currentDate - createdDate) / 1000
  );

  if (timeDifferenceInSeconds < 60) {
    return "1 minute ago";
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (timeDifferenceInSeconds < 3600 * 24) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (timeDifferenceInSeconds < 3600 * 24 * 30) {
    const days = Math.floor(timeDifferenceInSeconds / (3600 * 24));
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (timeDifferenceInSeconds < 3600 * 24 * 30 * 12) {
    const months = Math.floor(timeDifferenceInSeconds / (3600 * 24 * 30));
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / (3600 * 24 * 30 * 12));
    const remainingMonths = Math.floor(
      (timeDifferenceInSeconds % (3600 * 24 * 30 * 12)) / (3600 * 24 * 30)
    );
    const formattedYears = remainingMonths === 0 ? years : years + 1;
    return formattedYears === 1 ? "1 year ago" : `${formattedYears} years ago`;
  }
}

export function formatCreatedAt(createdAt) {
  const createdDate = new Date(createdAt);

  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const day = createdDate.getDate();

  // 원하는 형식으로 조합
  const formattedDate = `${year}. ${month}. ${day}`;

  return formattedDate;
}
