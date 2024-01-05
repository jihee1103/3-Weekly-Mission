import styled from 'styled-components';
import addFolderIcon from '../../asset/addfolder.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 87px;
  @media (max-width: 767px) {
    & {
      display: none;
    }
  }
`;
const AddFolderText = styled.span`
  cursor: pointer;
`;
const AddFolderIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default function AddFolder() {
  return (
    <Wrapper>
      <AddFolderText>폴더 추가</AddFolderText>
      <AddFolderIcon src={addFolderIcon} />
    </Wrapper>
  );
}
