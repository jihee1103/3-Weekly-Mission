import styled from 'styled-components';
import kakaoLogo from '../../asset/Kakao.svg';
import facebookLogo from '../../asset/Facebook.svg';
import linkLogo from '../../asset/link.svg';

export default function ShareFolder({ folderName }) {
  return (
    <ShareFolderWrapper>
      <ShareFolderTitleContainer>
        <ShareFolderTitle>폴더 공유</ShareFolderTitle>
        <ShareFolderName>{folderName}</ShareFolderName>
      </ShareFolderTitleContainer>
      <ShareFolderIconContainer>
        <IconBox>
          <SocialIcon color="#FEE500">
            <Icon src={kakaoLogo} />
          </SocialIcon>
          <IconName>카카오톡</IconName>
        </IconBox>
        <IconBox>
          <SocialIcon color="#1877F2">
            <Icon src={facebookLogo} />
          </SocialIcon>
          <IconName>페이스북</IconName>
        </IconBox>
        <IconBox>
          <SocialIcon color="rgba(157, 157, 157, 0.04)">
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
