import "./style.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";
import FilterButton from "../../components/FilterButton";
import addIcon from "../../assets/add.svg";
import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/delete.svg";

const FolderPage = ({ user, folderObj }) => {
  return (
    <>
      <Nav user={user} />
      <main>
        <section className="AddLinkBar-section">
          <div className="AddLinkBar-wrapper">
            <AddLinkBar />
          </div>
        </section>

        <section className="FolderPage-section">
          <div className="SearchBar-wrapper">
            <SearchBar />
          </div>
          <div className="FilterButton-container">
            <ul className="FilterButton-wrapper">
              {folderObj.length &&
                folderObj.map((folder) => (
                  <li key={folder.id}>
                    <FilterButton>{folder.name}</FilterButton>
                  </li>
                ))}
            </ul>
            <button className="add-button">
              <img className="add-icon" src={addIcon} alt="필터링 폴더를 새로 생성하는 버튼" />
            </button>
          </div>
          <div className="FolderPage-setting-wrapper">
            <div className="FolderPage-setting">
              <div className="FilterButton-text">유용한 글</div>
              <div className="setting-buttons">
                <button className="setting-button">
                  <img className="share-icon" src={shareIcon} alt="공유 버튼" />
                  <span className="button-name">공유</span>
                </button>
                <button className="setting-button">
                  <img className="pen-icon" src={penIcon} alt="이름 변경 버튼" />
                  <span className="button-name">이름 변경</span>
                </button>
                <button className="setting-button">
                  <img className="delete-icon" src={deleteIcon} alt="삭제 버튼" />
                  <span className="button-name">삭제</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
