import Navbar from "../components/Navbar/Navbar";
import AddLink from "../components/AddLink/AddLink";
import Content from "../components/Content/Content";

function FolderPage() {
  return (
    <>
      <Navbar isSticky={true} />
      <AddLink />
      <Content />
    </>
  );
}

export default FolderPage;
