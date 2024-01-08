import Navbar from "../components/Navbar/Navbar";
import AddLink from "../components/AddLink/AddLink";
import SearchBar from "../components/SearchBar/SearchBar";

function SharedLinkPage() {
  const isShared = true;
  return (
    <>
      <Navbar isShared={isShared} />
      <AddLink />
      <SearchBar />
    </>
  );
}

export default SharedLinkPage;
