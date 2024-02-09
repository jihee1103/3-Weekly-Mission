import "./style.css";
import { MouseEvent, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";
import FilterButton from "../../components/FilterButton";
import Folders from "../../components/FolderItem";
import { getFolderLinks, getTotalFolderLinks } from "../../api";

import addIcon from "../../assets/add.svg";
import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/delete.svg";
import { Link, User, Folder } from "../../types";

interface FolderPageProps {
  user?: User;
  folderList?: Folder[];
}

const FolderPage = ({ user, folderList }: FolderPageProps) => {
  const [keyword, setKeyword] = useState("전체");
  const [links, setLinks] = useState<Link[]>([]);

  const handleLoad = async () => {
    const links = await getTotalFolderLinks();
    if (links.data) {
      setLinks(links.data);
    }
  };

  const handleButtonClick = async (e: MouseEvent<HTMLLIElement>) => {
    const buttonElement = e.target as HTMLLIElement;

    if (buttonElement && buttonElement.textContent) {
      setKeyword(buttonElement.textContent);
      const folderId = Number(buttonElement.id);
      const links = await getFolderLinks(folderId);
      setLinks(links.data);
    }
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
              {folderList?.length &&
                folderList.map((folder) => (
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

          <div className="FolderItem-wrapper">
            {links.length && folderList?.length ? (
              <div className="FolderItem-folder-links">
                {links.map((link) => (
                  <Folders key={link.id} link={link} />
                ))}
              </div>
            ) : (
              <div className="FolderItem-error-message">저장된 링크가 없습니다</div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
