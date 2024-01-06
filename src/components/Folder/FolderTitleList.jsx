import styled from 'styled-components';
import FolderTitle from './FolderTitle';
import AddFolder from './AddFolder';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  @media (max-width: 1199px) {
    & {
      width: 704px;
    }
  }
  @media (max-width: 767px) {
    & {
      width: 325px;
      margin-top: 8px;
    }
  }
`;
const FolderListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px 12px;
  flex-wrap: wrap;
`;
const FolderItemAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  cursor: pointer;
`;
const AddFolderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    & {
      cursor: pointer;
      position: fixed;
      bottom: 101px;
      right: 50%;
      transform: translateX(50%);
      padding: 8px 24px;
      border-radius: 20px;
      border: 1px solid #fff;
      background: #6d6afe;
      z-index: 1;
    }
  }
`;

export default function FolderTitleList({ folderList, folderId, onClick }) {
  const allFolder = { id: 0, name: '전체' };
  return (
    <Wrapper>
      <FolderListContainer>
        <FolderItemAll onClick={() => onClick(allFolder)}>전체</FolderItemAll>
        {folderList.map((item) => (
          <FolderTitle
            key={item.id}
            item={item}
            folderId={folderId}
            onClick={() => onClick(item)}
          />
        ))}
      </FolderListContainer>
      <AddFolderWrapper>
        <AddFolder />
      </AddFolderWrapper>
    </Wrapper>
  );
}
