import styled from 'styled-components';
import AddLink from '../AddLink/AddLink';
import Navbar from '../Navbar/Navbar';
import FolderBody from './FolderBody';

const AddLinkArea = styled.div`
  display: flex;
  height: 219px;
  align-items: center;
  justify-content: center;
  background: #f0f6ff;
  padding: 60px 200px 90px;
  @media (max-width: 1199px) {
    & {
      padding: 60px max(32px, calc((100vw - 800px) / 2)) 90px;
    }
  }
  @media (max-width: 767px) {
    & {
      padding: 24px 32px 40px;
    }
  }
`;
const FolderBodyArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export default function Folder() {
  return (
    <>
      <Navbar />
      <AddLinkArea>
        <AddLink />
      </AddLinkArea>
      <FolderBodyArea>
        <FolderBody />
      </FolderBodyArea>
    </>
  );
}
