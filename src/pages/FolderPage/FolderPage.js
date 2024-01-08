import { useState, useEffect } from "react";
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
  };

  useEffect(() => {
    async function getFolderLinks() {
      const { data } = await getLinksById(id);
      if (!data) return;
      setLinks(data);
    }

    getFolderLinks();
  }, [id]);

  return (
    <>
      <header>
        <Nav className="not-fixed" id="1" />
        <AddLink />
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

          {links.length > 0 ? (
            <div className="pages">
              {links
                .filter((element) => {
                  if (id) {
                    return element["folder_id"] === id;
                  } else return true;
                })
                .map((element) => {
                  return <Card key={element.id} page={element} />;
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
          <Links target="_blank" rel="noopener noreferrer" />
        </div>
      </footer>
    </>
  );
}

export default FolderPage;
