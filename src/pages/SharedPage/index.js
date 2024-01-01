import Nav from "../../components/Nav";
import FolderLinks from "../../components/FolderLinks";

const SharedPage = ({ user, folderObj }) => {
  const { folder = {} } = folderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <>
      <Nav user={user} />
      <img src={owner.profileImageSource} alt={owner.name} />
      <div>@{owner.name}</div>
      <div>{folder.name}</div>
      <FolderLinks links={links} />
    </>
  );
};

export default SharedPage;
