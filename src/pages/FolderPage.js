import Navbar from "../components/Navbar/Navbar";
import AddLink from "../components/AddLink/AddLink";
import Content from "../components/Content/Content";
import AddFolderButton from "../components/AddFolderButton/AddFolderButton";

function FolderPage() {
  return (
    <>
      <Navbar isSticky={true} />
      <AddLink />
      <Content />
      <AddFolderButton></AddFolderButton>
    </>
  );
}

export default FolderPage;
