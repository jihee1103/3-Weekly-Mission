import noImageSource from "../../../assets/images/no_image_source.svg";

const Card = ({ linkData }) => {
    const passedTimeCalculator = (link) => {
        let nowTime = Date.now();
        let uploadedTime = new Date(link.createdAt).getTime();
        let passedSeconds = Math.floor((nowTime - uploadedTime) / 1000);
        let passedMinutes = passedSeconds / 60;
        let passedHours = passedMinutes / 60;
        let passedDay = passedHours / 24;
        let passedMonth = passedDay / 30;
        let passedYear = passedMonth / 12;
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
    };
    return (
        <ul className="link-list">
            {Array.isArray(linkData.links)
                ? linkData.links.map((link) => {
                      return (
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
                                  <div className="link__content--createdAt">2023. 3. 15</div>
                              </div>
                          </a>
                      );
                  })
                : null}
        </ul>
    );
};

export default Card;
