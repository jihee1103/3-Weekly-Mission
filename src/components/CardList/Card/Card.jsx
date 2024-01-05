import styled from 'styled-components';

const AlertNotStoredLink = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const Card = ({ cardData }) => {
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
      {cardData.length !== 0 ? (
        cardData.map((link) => {
          return (
            <a href={link.url} target="_blank" className="link" key={link.id} rel="noreferrer">
              <div>
                <div className="link__img">
                  {link.image_source ?? link.imageSource ? (
                    <img src={link.image_source ?? link.imageSource} alt="카드 이미지" />
                  ) : (
                    <img src={`${process.env.PUBLIC_URL}/images/no_image_source.svg`} alt="이미지가 없음" />
                  )}
                </div>
                <div className="link__content">
                  <div className="link__content--time-passed">
                    {calculatePassedTime(link.created_at ?? link.createdAt)}
                  </div>
                  <div className="link__content--description">{link.description}</div>
                  <div className="link__content--createdAt">{getFormattedDate(link.created_at ?? link.createdAt)}</div>
                </div>
              </div>
            </a>
          );
        })
      ) : (
        <AlertNotStoredLink>저장된 링크가 없습니다</AlertNotStoredLink>
      )}
    </ul>
  );
};

export default Card;
