export const getTimeDifference = (createdTime) => {
  const now = new Date();
  const createdDate = new Date(createdTime);
  const timeDifference = Math.floor((now - createdDate) / (60 * 1000)); // 분 단위

  if (timeDifference < 2) {
    return "1 minute ago";
  } else if (timeDifference < 59) {
    return `${timeDifference} minutes ago`;
  } else if (timeDifference < 60 * 24) {
    const hours = Math.floor(timeDifference / 60);
    return `${hours} hours ago`;
  } else if (timeDifference < 60 * 24 * 30) {
    const days = Math.floor(timeDifference / (60 * 24));
    return `${days} days ago`;
  } else if (timeDifference < 60 * 24 * 30 * 12) {
    const months = Math.floor(timeDifference / (60 * 24 * 30));
    return `${months} months ago`;
  } else {
    const years = Math.floor(timeDifference / (60 * 24 * 30 * 12));
    return `${years} years ago`;
  }
};

export function getCreateDay(createAt) {
  const date = new Date(createAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  return `${year}.${month}.${day}`;
}
