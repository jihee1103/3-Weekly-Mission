const Card = ({ cardData, folderCardData }) => {
  const calculatePassedTime = (createdAt) => {
    const nowTime = Date.now();
    const uploadedTime = new Date(createdAt).getTime();
    const passedSeconds = Math.floor((nowTime - uploadedTime) / 1000);
    const passedMinutes = passedSeconds / 60;
    const passedHours = passedMinutes / 60;
    const passedDay = passedHours / 24;
    const passedMonth = passedDay / 30;
    const passedYear = passedMonth / 12;
    // 큰 단위부터 하나씩 컷하기
    if (passedYear >= 1) {
      return `${Math.floor(passedYear)} years ago`;
    }
    if (passedMonth >= 1) {
      return `${Math.floor(passedMonth)} months ago`;
    }
    if (passedDay >= 1) {
      return `${Math.floor(passedDay)} days ago`;
    }
    if (passedHours >= 1) {
      return `${Math.floor(passedHours)} hours ago`;
    }
    if (passedMinutes >= 1) {
      return `${Math.floor(passedMinutes)}minutes ago`;
    }
    return '1minutes ago';
  };

  const getFormattedDate = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}. ${month}. ${day}`;
  };

  return (
    <ul className="link-list">
      <button
        type="button"
        onClick={() => {
          console.log('폴더데이터 : ' + folderCardData);
          console.log('링크 데이터 : ' + cardData);
        }}
      >
        데이터보기
      </button>
      {Array.isArray(cardData)
        ? cardData.map((link) => {
            return (
              <a href={link.url} target="_blank" className="link" key={link.id} rel="noreferrer">
                <div>
                  <div className="link__img">
                    {link.imageSource ? (
                      <img src={link.imageSource} alt="카드 이미지" />
                    ) : (
                      <img src={`${process.env.PUBLIC_URL}/images/no_image_source.svg`} alt="이미지가 없음" />
                    )}
                  </div>
                  <div className="link__content">
                    <div className="link__content--time-passed">{calculatePassedTime(link.createdAt)}</div>
                    <div className="link__content--description">{link.description}</div>
                    <div className="link__content--createdAt">{getFormattedDate(link.createdAt)}</div>
                  </div>
                </div>
              </a>
            );
          })
        : null}
    </ul>
  );
};

export default Card;
