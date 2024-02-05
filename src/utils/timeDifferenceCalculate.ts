function timeDifferenceCalculate(date) {
  let diff = Date.now() - date.getTime();
  diff = diff / 1000 / 60; // 분

  let timeDiff;

  if (diff < 2) {
    timeDiff = "1 minute";
  } else if (diff < 60) {
    timeDiff = `${Math.floor(diff / 1)} minutes`;
  } else if (diff >= 60 && diff < 120) {
    timeDiff = "1 hour";
  } else {
    diff = diff / 60; // 시간
    if (diff < 24) {
      timeDiff = `${Math.floor(diff / 1)} hours`;
    } else if (diff >= 24 && diff < 48) {
      timeDiff = "1 day";
    } else {
      diff = diff / 24; // 일
      if (diff < 31) {
        timeDiff = `${Math.floor(diff / 1)} days`;
      } else if (diff >= 31 && diff < 62) {
        timeDiff = "1 month";
      } else {
        diff = diff / 30.4; // 월
        if (diff < 12) {
          timeDiff = `${Math.floor(diff / 1)} months`;
        } else if (diff >= 12 && diff < 24) {
          timeDiff = "1 year";
        } else {
          timeDiff = `${Math.floor(diff / 12)} years`;
        }
      }
    }
  }

  return timeDiff;
}

export default timeDifferenceCalculate;
