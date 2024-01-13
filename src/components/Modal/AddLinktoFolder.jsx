import styled from 'styled-components';

export default function AddLinktoFolder() {
  return (
    <ShareFolderWrapper>
      <ShareFolderTitleContainer>
        <ShareFolderTitle>폴더에 추가</ShareFolderTitle>
        <ShareFolderName>링크 주소</ShareFolderName>
      </ShareFolderTitleContainer>
      <FolderListContainer />
      <AddLinkButton />
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
const FolderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AddLinkButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
