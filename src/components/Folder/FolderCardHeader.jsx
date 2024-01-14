import styled from 'styled-components';
import deleteIcon from '../../asset/deleteIcon.svg';
import editIcon from '../../asset/penIcon.svg';
import shareIcon from '../../asset/shareIcon.svg';

export default function FolderCardHeader({
  folderName,
  folderId,
  toggleModal,
  updateModalName,
}) {
  const handleButtonClick = (e) => {
    toggleModal();
    updateModalName(e.currentTarget.id);
  };
  return (
    <Wrapper>
      <FolderTitle>{folderName}</FolderTitle>
      {folderId !== 0 && (
        <FolderManageContainer>
          <FolderEditButton id="shareFolder" onClick={handleButtonClick}>
            <EditIcon src={shareIcon} />
            공유
          </FolderEditButton>
          <FolderEditButton id="changeFolderName" onClick={handleButtonClick}>
            <EditIcon src={editIcon} />
            이름 변경
          </FolderEditButton>
          <FolderEditButton id="deleteFolder" onClick={handleButtonClick}>
            <DeleteIcon src={deleteIcon} />
            삭제
          </FolderEditButton>
        </FolderManageContainer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const FolderTitle = styled.span`
  font-size: 24px;
  font-weight: 600px;
`;
const FolderManageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #9fa6b2;
  font-weight: 600;
`;

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const DeleteIcon = styled.img`
  display: flex;
  width: 18px;
  height: 18px;
  padding: 1.2px 1.5px 1px 1.5px;
  justify-content: center;
  align-items: center;
`;
const FolderEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;
`;
