import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

function SharedLinkPage() {
  const isFolder = false;
  return (
    <>
      <Navbar isFolder={isFolder} />
      <Header></Header>
      <SearchBar />
    </>
  );
}

export default SharedLinkPage;
