import styled from 'styled-components';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';
import FolderListArea from './FolderListArea';

const FolderCardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export default function FolderContent({ links }) {
  return (
    <>
      <FolderListArea />
      <FolderCardArea>
        <FolderCardHeader />
        <FolderCardList links={links} />
      </FolderCardArea>
    </>
  );
}
