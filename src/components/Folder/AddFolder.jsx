import styled from 'styled-components';
import addFolderIcon from '../../asset/addfolder.svg';
import addFolderWhiteIcon from '../../asset/addfolderwhite.svg';

export default function AddFolder({ toggleModalClick }) {
  const handleAddFolderClick = () => {
    toggleModalClick();
  };
  return (
    <Wrapper onClick={handleAddFolderClick}>
      <AddFolderText>폴더 추가</AddFolderText>
      <AddFolderIcon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 80px;
  height: 20px;
`;
const AddFolderText = styled.span`
  cursor: pointer;
  color: #6d6afe;
  @media (max-width: 767px) {
    & {
      color: #e7effb;
    }
  }
`;
const AddFolderIcon = styled.div`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  background-image: url(${addFolderIcon});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 767px) {
    background-image: url(${addFolderWhiteIcon});
  }
`;
