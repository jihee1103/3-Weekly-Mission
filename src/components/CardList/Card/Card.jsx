import { useState } from 'react';
import { Link } from 'react-router-dom';
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

const KebabBtn = styled.button`
  width: 21px;
  height: 17px;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    border-radius: 2px;
    background-color: #313131;
    color: white;
  }
`;

const KebabMenu = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  position: absolute;
  right: -80px;
  top: 16px;
`;

const KebabMenuDeleteBtn = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const KebabMenuAddFolderBtn = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: var(--Linkbrary-gray10, #e7effb);
  color: var(--Linkbrary-primary-color, #6d6afe);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Card = ({ cardData }) => {
  const [kebabToggle, setKebabToggle] = useState(false);

  const handleKebabToggle = () => {
    setKebabToggle(!kebabToggle);
  };

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
            <Link to={link.url} target="_blank" className="link" key={link.id} rel="noreferrer">
              <div>
                <div className="link__img">
                  {link.image_source ?? link.imageSource ? (
                    <img className="link__img--card" src={link.image_source ?? link.imageSource} alt="카드 이미지" />
                  ) : (
                    <img
                      className="link__img--card"
                      src={`${process.env.PUBLIC_URL}/images/no_image_source.svg`}
                      alt="이미지가 없음"
                    />
                  )}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/star.svg`}
                    alt="즐겨찾기 별 이미지"
                    className="link__img--star"
                  />
                </div>
                <div className="link__content">
                  <div className="link__content--time-passed">
                    {calculatePassedTime(link.created_at ?? link.createdAt)}
                    <KebabBtn
                      onClick={(e) => {
                        e.preventDefault();
                        handleKebabToggle();
                      }}
                    >
                      <img
                        className="link__content--More-Btn"
                        src={`${process.env.PUBLIC_URL}/images/kebab.svg`}
                        alt="더보기 케밥 버튼"
                      />
                    </KebabBtn>
                    {kebabToggle ? (
                      <KebabMenu>
                        <KebabMenuDeleteBtn>삭제하기</KebabMenuDeleteBtn>
                        <KebabMenuAddFolderBtn>폴더에 추가</KebabMenuAddFolderBtn>
                      </KebabMenu>
                    ) : null}
                  </div>
                  <div className="link__content--description">{link.description}</div>
                  <div className="link__content--createdAt">{getFormattedDate(link.created_at ?? link.createdAt)}</div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <AlertNotStoredLink>저장된 링크가 없습니다</AlertNotStoredLink>
      )}
    </ul>
  );
};

export default Card;
