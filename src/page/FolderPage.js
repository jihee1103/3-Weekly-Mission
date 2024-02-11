import AddLinkBar from "../components/AddLinkBar";
import HeaderNavigation from "../components/HeaderNavigation";

const FolderPage = () => {
  return (
    <>
      <header>
        <HeaderNavigation />
        <AddLinkBar />
      </header>
      <main>
        <section>링크 검색 인풋</section>
        <nav>폴더이름 버튼 섹션</nav>
        <section>
          <div>
            <h1>폴더 제목</h1>
            <div>기능아이콘</div>
          </div>
          <article>컨텐츠 리스트</article>
        </section>
      </main>
      <footer>푸터</footer>
    </>
  );
};

export default FolderPage;
