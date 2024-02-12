import styled from 'styled-components';

const ModalTitle = ({ text, detailText }) => {
  return (
    <div>
      <ModalTitleHeader detailText={detailText}>{text}</ModalTitleHeader>
      <ModalTitleDetail>{detailText}</ModalTitleDetail>
    </div>
  );
};

const ModalTitleHeader = styled.h1`
  text-align: center;
  width: 280px;
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.detailText ? '8px' : '0px')};
`;

const ModalTitleDetail = styled.p`
  color: #9fa6b2;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 22px; /* 157.143% */
`;

export default ModalTitle;
