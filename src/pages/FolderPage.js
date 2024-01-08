import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

function FolderPage() {
  const isShared = false;
  return (
    <>
      <Navbar isShared={isShared} />
      <Header />
      <Content />
    </>
  );
}

export default FolderPage;
