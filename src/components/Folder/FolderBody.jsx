import styled from 'styled-components';
import FolderListArea from './FolderListArea';
import SearchBar from '../SearchBar/SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export default function FolderBody() {
  return (
    <Wrapper>
      <SearchBar />
      <FolderListArea />
      <div>FolderBody</div>
    </Wrapper>
  );
}
