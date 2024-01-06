import styled from 'styled-components';
import FolderListArea from './FolderListArea';
import SearchBar from '../SearchBar/SearchBar';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const FolderCardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export default function FolderBody() {
  return (
    <Wrapper>
      <SearchBar />
      <FolderListArea />
      <FolderCardArea>
        <FolderCardHeader />
        <FolderCardList />
      </FolderCardArea>
    </Wrapper>
  );
}
