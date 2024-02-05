import { useState, useEffect } from 'react';
import { getFoldersById, getLinksById } from '../../api';
import './FolderPage.css';
import Nav from '../../components/header/Nav/Nav';
import Search from '../../components/section/Search/Search';
import FooterLinks from '../../components/footer/FooterLinks/FooterLinks';
import AddLink from '../../components/header/AddLink/AddLink';
import FolderList from '../../components/section/FolderList/FolderList';
import EditOption from '../../components/section/EditOption/EditOption';
import Card from '../../components/section/Card/Card';

function FolderPage() {
  const [folderInfo, setFolderInfo] = useState({ name: '전체', id: null });
  const [userId, setUserId] = useState();
  const [links, setLinks] = useState([]);
  const [folderList, setFolderList] = useState([]);

  const handleChangeFolder = (nextName, nextId) => {
    setFolderInfo({ name: nextName, id: nextId });
  };

  const handleSetUserId = (nextUserId) => {
    setUserId(nextUserId);
  };

  useEffect(() => {
    async function getFolderLinks() {
      const { data } = await getLinksById(folderInfo.id);
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
  }, [folderInfo.id, userId]);

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
            folderName={folderInfo.name}
            onClickFolder={handleChangeFolder}
            id="1"
          />
          <div className="folders__folder-info">
            <span className="folders__folder-name">{folderInfo.name}</span>
            {folderInfo.name === '전체' || (
              <div className="folders__folder-edit">
                <EditOption
                  src="./images/share.png"
                  optionName="공유"
                  userId={userId}
                  folder={folderInfo}
                />
                <EditOption
                  src="./images/pen.png"
                  optionName="이름 변경"
                  folder={folderInfo}
                />
                <EditOption
                  src="./images/delete.png"
                  optionName="삭제"
                  folder={folderInfo}
                />
              </div>
            )}
          </div>
          {links.length > 0 ? (
            <div className="pages">
              {links
                .filter((element) => {
                  return !folderInfo.id || element?.folder_id === folderInfo.id;
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
