import Nav from "../../components/Nav";
import FolderLinks from "../../components/FolderLinks";
import Footer from "../../components/Footer";
import "./style.css";

const SharedPage = ({ user, folderObj }) => {
  const { folder = {} } = folderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <main>
      <Nav user={user} />
      <img src={owner.profileImageSource} alt={owner.name} />
      <div>@{owner.name}</div>
      <div>{folder.name}</div>
      <FolderLinks links={links} />
      <Footer />
    </main>
  );
};

export default SharedPage;
