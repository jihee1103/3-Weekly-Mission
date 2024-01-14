import { useEffect } from 'react';
import styled from 'styled-components';
import { FacebookShareButton } from 'react-share';
import facebookLogo from '../../asset/Facebook.svg';
import kakaoLogo from '../../asset/Kakao.svg';
import linkLogo from '../../asset/link.svg';
import Error from '../Error/Error';
import shareKakao from '../../utils/shareKakao';

const { Kakao } = window;
const kakaoApiKey = process.env.REACT_APP_API_KEY;

export default function ShareFolder({ folderName, userId, folderId, links }) {
  const shareUrl = `https://${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch (error) {
      return <Error errorMessage={error.message} />;
    } finally {
      alert('링크가 복사되었습니다!');
    }
    return null;
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(kakaoApiKey);
  }, []);

  return (
    <ShareFolderWrapper>
      <ShareFolderTitleContainer>
        <ShareFolderTitle>폴더 공유</ShareFolderTitle>
        <ShareFolderName>{folderName}</ShareFolderName>
      </ShareFolderTitleContainer>
      <ShareFolderIconContainer>
        <IconBox>
          <SocialIcon
            color="#FEE500"
            onClick={() => shareKakao(links, folderName, shareUrl)}
          >
            <Icon src={kakaoLogo} />
          </SocialIcon>
          <IconName>카카오톡</IconName>
        </IconBox>
        <IconBox>
          <FacebookShareButton url={shareUrl}>
            <SocialIcon color="#1877F2">
              <Icon src={facebookLogo} />
            </SocialIcon>
          </FacebookShareButton>
          <IconName>페이스북</IconName>
        </IconBox>
        <IconBox>
          <SocialIcon color="rgba(157, 157, 157, 0.04)" onClick={copyLink}>
            <Icon src={linkLogo} />
          </SocialIcon>
          <IconName>링크 복사</IconName>
        </IconBox>
      </ShareFolderIconContainer>
    </ShareFolderWrapper>
  );
}

const ShareFolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const ShareFolderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const ShareFolderTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const ShareFolderName = styled.span`
  line-height: 22px;
  color: #9fa6b2;
`;
const ShareFolderIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const SocialIcon = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
  cursor: pointer;
`;
const IconName = styled.span`
  font-size: 13px;
  line-height: 15px;
  color: #373740;
`;
const Icon = styled.img``;
