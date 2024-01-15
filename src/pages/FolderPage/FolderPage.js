import { useState, useEffect } from "react";
import { getFoldersById, getLinksById } from "../../api";
import "./FolderPage.css";
import Nav from "../../components/header/Nav/Nav";
import Search from "../../components/section/Search/Search";
import FooterLinks from "../../components/footer/FooterLinks/FooterLinks";
import AddLink from "../../components/header/AddLink/AddLink";
import FolderList from "../../components/section/FolderList/FolderList";
import EditOption from "../../components/section/EditOption/EditOption";
import Card from "../../components/section/Card/Card";

function FolderPage() {
  const [listName, setListName] = useState("전체");
  const [userId, setUserId] = useState();
  const [folderId, setFolderId] = useState();
  const [links, setLinks] = useState([]);
  const [folderList, setFolderList] = useState([]);

  const handleChangeList = (nextListName, nextId) => {
    setListName(nextListName);
    setFolderId(nextId);
  };

  const handleSetUserId = (nextUserId) => {
    setUserId(nextUserId);
  };

  useEffect(() => {
    async function getFolderLinks() {
      const { data } = await getLinksById(folderId);
      if (!data) return;
      setLinks(data);
    }

    async function getFolderLists() {
      const { data } = await getFoldersById(userId);
      if (!data) return;
      setFolderList(
        data.map((element) => {
          return [element.name, element.link.count];
        })
      );
    }

    getFolderLinks();
    getFolderLists();
  }, [folderId, userId]);

  return (
    <>
      <header>
        <Nav className="not-fixed" id="1" setUserId={handleSetUserId} />
        <AddLink folderList={folderList} />
      </header>
      <section>
        <Search />
        <div className="folders">
          <FolderList
            listName={listName}
            onClickList={handleChangeList}
            id="1"
          />
          <div className="list-info">
            <span className="list-name">{listName}</span>
            {listName === "전체" || (
              <div className="list-edit">
                <EditOption
                  src="./images/share.png"
                  optionName="공유"
                  listName={listName}
                  userId={userId}
                  folderId={folderId}
                />
                <EditOption
                  src="./images/pen.png"
                  optionName="이름 변경"
                  listName={listName}
                />
                <EditOption
                  src="./images/delete.png"
                  optionName="삭제"
                  listName={listName}
                />
              </div>
            )}
          </div>
          {links.length > 0 ? (
            <div className="pages">
              {links
                .filter((element) => {
                  if (folderId) {
                    return element["folder_id"] === folderId;
                  } else return true;
                })
                .map((element) => {
                  return (
                    <Card
                      key={element.id}
                      page={element}
                      folderList={folderList}
                    />
                  );
                })}
            </div>
          ) : (
            <div className="no-link">저장된 링크가 없습니다.</div>
          )}
        </div>
      </section>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <FooterLinks target="_blank" rel="noopener noreferrer" />
        </div>
      </footer>
    </>
  );
}

export default FolderPage;
