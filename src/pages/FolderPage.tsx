import Navbar from "../components/Navbar/Navbar";
import AddLinkForm from "../components/AddLinkForm/AddLinkForm";
import Content from "../components/Content/Content";

function FolderPage() {
  return (
    <>
      <Navbar isSticky />
      <AddLinkForm />
      <Content />
    </>
  );
}

export default FolderPage;
