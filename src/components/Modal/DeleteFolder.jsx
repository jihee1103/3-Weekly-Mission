import styled from 'styled-components';

export default function DeleteFolder({ folderName }) {
  return (
    <DeleteFolderWrapper>
      <DeleteFolderTitleContainer>
        <DeleteFolderTitle>폴더 삭제</DeleteFolderTitle>
        <DeleteFolderName>{folderName}</DeleteFolderName>
      </DeleteFolderTitleContainer>
      <DeleteFolderButton>삭제하기</DeleteFolderButton>
    </DeleteFolderWrapper>
  );
}

const DeleteFolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const DeleteFolderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const DeleteFolderTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const DeleteFolderName = styled.span`
  line-height: 22px;
  color: #9fa6b2;
`;

const DeleteFolderButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #ff5b56;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
