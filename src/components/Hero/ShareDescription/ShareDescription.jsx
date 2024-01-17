import styled from 'styled-components';

const ShareDescription = ({ sharePageData, heroFolderName }) => {
  return (
    <ShareDescriptionWrapper>
      <button
        type="button"
        onClick={() => {
          console.log(sharePageData);
        }}
      >
        버튼
      </button>
      <img src={sharePageData.owner?.profileImageSource} alt="코드잇 마크" />
      <span>{sharePageData.owner?.name}</span>
      <div>{heroFolderName}</div>
    </ShareDescriptionWrapper>
  );
};

const ShareDescriptionWrapper = styled.div`
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
