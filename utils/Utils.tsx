export function getTimeDifference(createdAt) {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();

  const timeDifferenceInSeconds = Math.floor(
    (currentDate.getTime() - createdDate.getTime()) / 1000
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

export async function copyToClipboard() {
  let hostAddress = window.location.origin;
  //현재 로그인 상태관리를 하지 못하므로 임시 ID 값
  let userId = 1;
  let folderId = 1;
  const shareLink = `${hostAddress}/shared?user=${userId}&folder=${folderId}`;

  try {
    await navigator.clipboard.writeText(shareLink);
    alert("링크가 클립보드에 복사되었습니다.");
  } catch (error) {
    console.error("클립보드 복사 실패:", error);
  }
}
