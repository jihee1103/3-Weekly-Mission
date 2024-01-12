import styled from 'styled-components';
import noImageSource from '../../../../assets/images/no_image_source.svg';
import star from '../../../../assets/images/star.svg';

const CardImg = ({ link }) => {
  return (
    <CardImgWrapper>
      {link.imageSource ? (
        <CardMainImg src={link.imageSource} alt="카드 이미지" />
      ) : (
        <CardMainImg src={noImageSource} alt="이미지가 없음" />
      )}
      <CardStarButton>
        <img src={star} alt="즐겨찾기 별 이미지" />
      </CardStarButton>
    </CardImgWrapper>
  );
};

const CardImgWrapper = styled.div`
  width: 100%;
  height: 205px;
  overflow: hidden;
  position: relative;
`;

export const CardMainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.1s;
`;

const CardStarButton = styled.button`
  width: 34px;
  height: 34px;
  position: absolute;
  top: 15px;
  right: 15px;

  &img {
    width: 100%;
    height: 100%;
  }
`;

export default CardImg;
