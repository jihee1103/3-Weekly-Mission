import Navbar from "../components/Navbar/Navbar";
import AddLink from "../components/AddLink/AddLink";
import Content from "../components/Content/Content";

function FolderPage() {
  const isFolder = true;
  return (
    <>
      <Navbar isFolder={isFolder} />
      <AddLink />
      <Content />
    </>
  );
}

export default FolderPage;
