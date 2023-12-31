import noImageSource from '../../../assets/images/no_image_source.svg';

const Card = ({ linkData }) => {
  const passedTimeCalculator = link => {
    const nowTime = Date.now();
    const uploadedTime = new Date(link.createdAt).getTime();
    const passedSeconds = Math.floor((nowTime - uploadedTime) / 1000);
    const passedMinutes = passedSeconds / 60;
    const passedHours = passedMinutes / 60;
    const passedDay = passedHours / 24;
    const passedMonth = passedDay / 30;
    const passedYear = passedMonth / 12;
    // 큰 단위부터 하나씩 컷하기
    if (passedYear >= 1) `${Math.floor(passedYear)} years ago`;
    else if (passedMonth >= 1) {
      return `${Math.floor(passedMonth)} months ago`;
    } else if (passedDay >= 1) {
      return `${Math.floor(passedDay)} days ago`;
    } else if (passedHours >= 1) {
      return `${Math.floor(passedHours)} hours ago`;
    } else if (passedMinutes >= 1) {
      return `${Math.floor(passedMinutes)}minutes ago`;
    } else if (passedMinutes < 1) {
      return '1minutes ago';
    }
  };

  const returnUploadDate = link => {
    const date = new Date(link.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}. ${month}. ${day}`;
  };

  return (
    <ul className="link-list">
      {Array.isArray(linkData.links)
        ? linkData.links.map(link => (
            <a href={link.url} className="link" key={link.id}>
              <div className="link__img">
                {link.imageSource ? (
                  <img src={link.imageSource} alt="카드 이미지" />
                ) : (
                  <img src={noImageSource} alt="이미지가 없음" />
                )}
              </div>
              <div className="link__content">
                <div className="link__content--time-passed">{passedTimeCalculator(link)}</div>
                <div className="link__content--description">{link.description}</div>
                <div className="link__content--createdAt">{returnUploadDate(link)}</div>
              </div>
            </a>
          ))
        : null}
    </ul>
  );
};

export default Card;
