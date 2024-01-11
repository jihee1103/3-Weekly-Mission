import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "./style.css";

const FolderPage = ({ user, folderObj }) => {
  return (
    <>
      <Nav user={user} />
      폴더 페이지
      <Footer />
    </>
  );
};

export default FolderPage;
