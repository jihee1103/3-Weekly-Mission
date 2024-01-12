import "./style.css";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";
import FilterButton from "../../components/FilterButton";
import { getFolderLinks, getTotalFolderLinks } from "../../api";

import addIcon from "../../assets/add.svg";
import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/delete.svg";

const FolderPage = ({ user, folderObj }) => {
  const [keyword, setKeyword] = useState("전체");
  const [links, setLinks] = useState([]);

  // ?folderId=${folderId}
  const handleLoad = async () => {
    const links = await getTotalFolderLinks();
    if (links.data.length) {
      setLinks(links.data);
    }
  };

  const handleButtonClick = async (e) => {
    setKeyword(e.target.textContent);
    const folderId = e.target.id;
    const links = await getFolderLinks(folderId);
    setLinks(links.data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
            <div className="FilterButton-wrapper">
              <li onClick={handleButtonClick}>
                <FilterButton>전체</FilterButton>
              </li>
              {folderObj.length &&
                folderObj.map((folder) => (
                  <li key={folder.id} onClick={handleButtonClick}>
                    <FilterButton id={folder.id}>{folder.name}</FilterButton>
                  </li>
                ))}
            </div>
            <button className="add-button">
              <img className="add-icon" src={addIcon} alt="필터링 폴더를 새로 생성하는 버튼" />
            </button>
          </div>

          <div className="FolderPage-setting-wrapper">
            <div className="FolderPage-setting">
              <div className="FilterButton-text">{keyword}</div>
              {keyword === "전체" ? null : (
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
              )}
            </div>
          </div>

          {links.length === 0 ? (
            <>조건에맞는게 없다.</>
          ) : (
            <div>
              {links.map((link) => (
                <div key={link.id}>{link.created_at}</div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
