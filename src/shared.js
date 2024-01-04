
export function createDay(createAt){
  const date = new Date(createAt);
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
}

export function beforeTime(createdTime) {
  const currentDate = new Date();
  const createdDate = new Date(createdTime);
  const timeDifference = Math.floor((currentDate - createdDate) / (60 * 1000)); // 분 단위 //

  const minutes = Math.floor(timeDifference / (1000*60));
  const hours = Math.floor(timeDifference / 60)// 
  const days = Math.floor(timeDifference / (60 * 24)); 
  const months = Math.floor(timeDifference / (60 * 24 * 30))
  const years = Math.floor(timeDifference / (60 * 24 * 30 * 12));

  if (timeDifference < 2) {
    return `${minutes} minute ago`;
  }  
  if (timeDifference < 59) {
    return `${minutes} minutes ago`;
  }  
  if (timeDifference < 60*24) {
    return `${hours} hours ago`;
  }  
  if (timeDifference < 60*24*30) {
    return `${days} days ago`;
  }  
  if (timeDifference < 60*24*30*12) {
    return `${months} months ago`;
  } 
    return `${years} years ago`;
};

// export const beforeTime = (value) => {
//   const currentDate = new Date();
//   const createdDate = new Date(value);
//   const diff = currentDate - createdDate;
//   const SECOND = 1000;
//   const MINUTE = SECOND * 60;
//   const HOUR = MINUTE * 60;
//   const DAY = HOUR * 24;
//   const MONTH = DAY * 30;
//   const YEAR = 365 * DAY;

//   const diffSec = Math.floor(diff / 1000);
//   const diffMin = Math.floor(diff / (60 * 1000));
//   const diffHour = Math.floor(diff / (60 * 60 * 1000));
//   const diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
//   const diffMonth = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
//   const diffYear = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));

//   if (diff < MINUTE) {
//     return `${diffSec} second${diff < SECOND * 2 ? "" : "s"} ago`;
//   }
//   if (diff < HOUR) {
//     return `${diffMin} minute${diff < MINUTE * 2 ? "" : "s"} ago`;
//   }
//   if (diff < DAY) {
//     return `${diffHour} hour${diff < HOUR * 2 ? "" : "s"} ago`;
//   }
//   if (diff < MONTH) {
//     return `${diffDate} day${diff < DAY * 2 ? "" : "s"} ago`;
//   }
//   if (diff < YEAR) {
//     return `${diffMonth} month${diff < 2 * MONTH ? "" : "s"} ago`;
//   }
//   return `${diffYear} year${diff < YEAR * 2 ? "" : "s"} ago`;
// };