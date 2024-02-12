import styled from "styled-components";
import AddFolderButton from "../components/AddFolderButton";
import AddLinkBar from "../components/AddLinkBar";
import FolderContentsList from "../components/FolderContentsList";
import FolderFunctionButtons from "../components/FolderFunctionButtons";
import FolderNameButton from "../components/FolderNameButton";
import FolderTitle from "../components/FolderTitle";
import Footer from "../components/Footer";
import HeaderNavigation from "../components/HeaderNavigation";
import SearchLinkBar from "../components/SearchLinkBar";

const FolderPage = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderNavigation />
        <AddLinkBar />
      </HeaderContainer>
      <main>
        <section>
          <SearchLinkBar />
        </section>
        <section>
          <FolderNameButton />
          <AddFolderButton />
        </section>
        <article>
          <header>
            <FolderTitle />
            <FolderFunctionButtons />
          </header>
          <FolderContentsList />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;

const HeaderContainer = styled.header`
  background-color: #f0f6ff;
  padding-top: 32px;
`;

const SearchLinkBarContainer = styled.section``;
