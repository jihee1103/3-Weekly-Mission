import FolderArea from '../Folder/FolderArea';
import FolderInfo from '../Folder/FolderInfo';
import Navbar from '../Navbar/Navbar';

export default function Shared() {
  return (
    <>
      <Navbar />
      <FolderInfo />
      <FolderArea />
    </>
  );
}
