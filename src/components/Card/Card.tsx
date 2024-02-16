import { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultImage from '../../asset/default-image.svg';
import kebabIcon from '../../asset/kebab.svg';
import starIcon from '../../asset/star.svg';
import { Links } from '../Folder/Folder';
import PopOverMenu from '../Modal/PopOverMenu';
import calculateTime from '../../../utils/calculateTime';

interface Props {
  link: Links;
  toggleModal?: () => void;
  updateModalName?: (name: string) => void;
  handleClickDeleteLink?: (url: string) => void;
}

export default function Card({
  link,
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
}: Props) {
  const [formattedCreatedAt, setFormattedCreatedAt] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [cardImgUrl, setCardImgUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isKebabClicked, setIsKebabClicked] = useState(false);

  const handleKebabClick = () => {
    setIsKebabClicked(!isKebabClicked);
  };

  const updateFormattedCreatedAt = (dateTimeString: string) => {
    const formattedDateTime = new Date(dateTimeString);

    const year = formattedDateTime.getFullYear();
    const month = formattedDateTime.getMonth() + 1;
    const day = formattedDateTime.getDate();

    setFormattedCreatedAt(`${year}. ${month}. ${day}`);
  };

  useEffect(() => {
    const formattedElapsedTime = calculateTime(link.createdAt);

    setElapsedTime(formattedElapsedTime);
    setLinkUrl(link.url);
    setCardImgUrl(link.imageSource);
    updateFormattedCreatedAt(link.createdAt);
  }, [link]);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = e.currentTarget as HTMLImageElement;
    imgElement.src = defaultImage;
  };
  return (
    <CardContainer>
      <CardImgArea to={linkUrl} target="_blank">
        <CardPreviewImg
          src={cardImgUrl || defaultImage}
          alt="카드 미리보기 이미지"
          onError={handleImageError}
        />
        <StarIcon src={starIcon} alt="즐겨찾기 버튼" />
      </CardImgArea>
      <CardInfoArea>
        <CardInfoTop>
          <CardInfoTime>{elapsedTime}</CardInfoTime>
          <KebabIcon
            src={kebabIcon}
            alt="더보기 아이콘"
            onClick={handleKebabClick}
          />
          {isKebabClicked ? (
            <PopOverMenu
              toggleModal={toggleModal}
              updateModalName={updateModalName}
              handleClickDeleteLink={handleClickDeleteLink}
              linkUrl={linkUrl}
            />
          ) : null}
        </CardInfoTop>
        <CardInfoBodyContainer to={linkUrl} target="_blank">
          <CardInfoBody>{link.description ?? '설명이 없습니다.'}</CardInfoBody>
          <CardInfoDate>{formattedCreatedAt}</CardInfoDate>
        </CardInfoBodyContainer>
      </CardInfoArea>
    </CardContainer>
  );
}
const CardPreviewImg = styled.img`
  max-height: 100%;
  margin: auto;
`;
const CardInfoArea = styled.div`
  display: flex;
  width: 100%;
  height: 135px;
  flex-direction: column;
  padding: 15px 20px;
  gap: 10px;
`;
const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 335px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    ${CardPreviewImg} {
      transition: all 0.3s;
      transform: scale(1.3);
    }
    ${CardInfoArea} {
      background-color: #f0f6ff;
    }
  }
  @media (max-width: 767px) {
    & {
      width: 325px;
      height: 327px;
    }
  }
`;
const CardImgArea = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  cursor: pointer;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  z-index: 1;
`;
const StarIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;
const CardInfoTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardInfoTime = styled.p`
  font-size: 13px;
  color: #666666;
`;
const KebabIcon = styled.img``;
const CardInfoBody = styled.p`
  position: relative;
  height: 49px;
  line-height: 24px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const CardInfoDate = styled.p`
  font-size: 14px;
  color: #333333;
`;
const CardInfoBodyContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #000000;
  gap: 10px;
`;
