export function getTimeDifferenceString(createdAt) {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const timeDifferenceInMinutes = Math.floor((now - createdDate) / (1000 * 60));

  if (timeDifferenceInMinutes < 2) {
    return "1 minute ago";
  } else if (timeDifferenceInMinutes <= 59) {
    return `${timeDifferenceInMinutes} minutes ago`;
  }

  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);

  if (timeDifferenceInHours === 1) {
    return "1 hour ago";
  } else if (timeDifferenceInHours <= 23) {
    return `${timeDifferenceInHours} hours ago`;
  }

  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);

  if (timeDifferenceInDays === 1) {
    return "1 day ago";
  } else if (timeDifferenceInDays <= 30) {
    return `${timeDifferenceInDays} days ago`;
  }

  const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30);

  if (timeDifferenceInMonths === 1) {
    return "1 month ago";
  } else if (timeDifferenceInMonths <= 11) {
    return `${timeDifferenceInMonths} months ago`;
  }

  const timeDifferenceInYears = Math.floor(timeDifferenceInMonths / 12);

  if (timeDifferenceInYears === 1) {
    return "1 year ago";
  } else {
    return `${timeDifferenceInYears} years ago`;
  }
}
