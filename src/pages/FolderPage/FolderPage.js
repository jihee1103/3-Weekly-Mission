import { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======
import { getLinksById } from "../../api";
import "./FolderPage.css";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Links from "../../components/Links/Links";
import AddLink from "../../components/AddLink/AddLink";
import FolderList from "../../components/FolderFilter/FolderList";
import Option from "../../components/Option/Option";
import Card from "../../components/Card/Card";

function FolderPage() {
  const [listName, setListName] = useState("전체");
  const [id, setId] = useState();
  const [links, setLinks] = useState([]);

  const handleChangeList = (nextListName, nextId) => {
    setListName(nextListName);
    setId(nextId);
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
  };

  useEffect(() => {
    async function getFolderLinks() {
<<<<<<< HEAD
      const { data } = await getLinksById(folderId);
=======
      const { data } = await getLinksById(id);
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
      if (!data) return;
      setLinks(data);
    }

<<<<<<< HEAD
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
=======
    getFolderLinks();
  }, [id]);
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4

  return (
    <>
      <header>
<<<<<<< HEAD
        <Nav className="not-fixed" id="1" setUserId={handleSetUserId} />
        <AddLink folderList={folderList} />
=======
        <Nav className="not-fixed" id="1" />
        <AddLink />
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
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
<<<<<<< HEAD
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
=======
            {listName !== "전체" ? (
              <div className="list-edit">
                <Option
                  className="option"
                  src="./images/share.png"
                  optionName="공유"
                />
                <Option
                  className="option"
                  src="./images/pen.png"
                  optionName="이름 변경"
                />
                <Option
                  className="option"
                  src="./images/delete.png"
                  optionName="삭제"
                />
              </div>
            ) : (
              <div />
            )}
          </div>

>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
          {links.length > 0 ? (
            <div className="pages">
              {links
                .filter((element) => {
<<<<<<< HEAD
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
=======
                  if (id) {
                    return element["folder_id"] === id;
                  } else return true;
                })
                .map((element) => {
                  return <Card key={element.id} page={element} />;
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
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
<<<<<<< HEAD
          <FooterLinks target="_blank" rel="noopener noreferrer" />
=======
          <Links target="_blank" rel="noopener noreferrer" />
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
        </div>
      </footer>
    </>
  );
}

export default FolderPage;
