import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import FolderListArea from './FolderListArea';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
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
