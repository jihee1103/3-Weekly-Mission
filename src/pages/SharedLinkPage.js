import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

function SharedLinkPage() {
  return (
    <>
      <Navbar isSticky={false} />
      <Header></Header>
      <SearchBar />
    </>
  );
}

export default SharedLinkPage;
