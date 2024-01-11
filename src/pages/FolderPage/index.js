import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const FolderPage = ({ user }) => {
  return (
    <>
      <Nav user={user} />
      폴더 페이지 입니다.
      <Footer />
    </>
  );
};

export default FolderPage;
