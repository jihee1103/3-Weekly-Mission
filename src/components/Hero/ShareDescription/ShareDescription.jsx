import styled from 'styled-components';

const ShareDescription = ({ heroLinkData }) => {
  return (
    <ShareDescriptionContainer>
      <img src={heroLinkData.owner?.profileImageSource} alt="코드잇 마크" />
      <span>{heroLinkData.owner?.name}</span>
      <div>{heroLinkData?.name}</div>
    </ShareDescriptionContainer>
  );
};

const ShareDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary-purple-70, #8f00ff);
    margin-bottom: 12px;
  }

  span {
    color: var(--text-color-light-mode, #000);
    font-family: Pretendard;
    font-size: 16px;
    margin-bottom: 20px;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 40px;
  }
`;

export default ShareDescription;
