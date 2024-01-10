import Navbar from "../components/Navbar/Navbar";
import AddLinkForm from "../components/AddLinkForm/AddLinkForm";
import Content from "../components/Content/Content";
import AddFolderButton from "../components/AddFolderButton/AddFolderButton";

function FolderPage() {
  return (
    <>
      <Navbar isSticky={true} />
      <AddLinkForm />
      <Content />
      <AddFolderButton></AddFolderButton>
    </>
  );
}

export default FolderPage;
