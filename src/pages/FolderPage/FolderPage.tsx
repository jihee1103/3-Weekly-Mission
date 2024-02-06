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

export interface Link {
  id: number;
  created_at?: string;
  createdAt?: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source?: string | null;
  imageSource?: string;
  folder_id: number | null;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export type Id = number | undefined;

export default function FolderPage() {
  const [folderInfo, setFolderInfo] = useState<{
    name: string;
    id: Id;
  }>({ name: '전체', id: 0 });
  const [userId, setUserId] = useState(0);
  const [links, setLinks] = useState<Link[]>([]);
  const [folderList, setFolderList] = useState<
    { name: string; linkCount: number }[]
  >([]);
  const [keyword, setKeyword] = useState('');

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  const handleChangeFolder = (nextName: string, nextId: Id) => {
    setFolderInfo({ name: nextName, id: nextId });
  };

  const handleSetUserId = (nextUserId: number) => {
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
        data.map((element: Folder) => {
          return { name: element.name, linkCount: element.link.count };
        })
      );
    }

    getFolderLinks();
    getFolderLists();
  }, [folderInfo.id, userId]);

  return (
    <>
      <header>
        <Nav className="not-fixed" id={1} setUserId={handleSetUserId} />
        <AddLink folderList={folderList} />
      </header>
      <section>
        <Search handleOnChange={handleSearchOnChange} />
        {keyword && (
          <span className="search-result">
            <strong>{keyword}</strong>으로 검색한 결과입니다.
          </span>
        )}
        <div className="folders">
          <FolderList
            folderName={folderInfo.name}
            onClickFolder={handleChangeFolder}
            id={1}
          />
          <div className="folders__folder-info">
            <span className="folders__folder-name">{folderInfo.name}</span>
            {folderInfo.name === '전체' || (
              <div className="folders__folder-edit">
                <EditOption
                  src="/images/share.png"
                  optionName="공유"
                  userId={userId}
                  folder={folderInfo}
                />
                <EditOption
                  src="/images/pen.png"
                  optionName="이름 변경"
                  folder={folderInfo}
                />
                <EditOption
                  src="/images/delete.png"
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
                  const { title, url, description } = element;
                  return (
                    (!folderInfo.id || element?.folder_id === folderInfo.id) &&
                    (url.toLowerCase().includes(keyword) ||
                      title?.toLowerCase().includes(keyword) ||
                      description?.toLowerCase().includes(keyword))
                  );
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
