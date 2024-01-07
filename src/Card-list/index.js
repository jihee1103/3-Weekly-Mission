import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getSampleFolder,
  getFilter,
  getFolder,
  getFolderByFolderId,
} from '../api/api';
import Card from './card';
import './style.css';

function CardList() {
  const [link, setLink] = useState();
  const [filter, setFilter] = useState([]);
  const [selectedFolderName, setSelectedFolderName] = useState('');
  const location = useLocation();

  const handleClick = async (folderId, folderName) => {
    setSelectedFolderName(folderName);
    try {
      const data = await getFolderByFolderId(folderId);
      setLink(data?.data || []);
    } catch (error) {
      console.error(`Error: ${error}`);
      setLink([]);
    }
  };

  useEffect(() => {
    if (location.pathname === '/folder') {
      const folderData = async () => {
        const data = await getFolder();
        setLink(data);
      };

      const filterData = async () => {
        const data = await getFilter();
        setFilter(data?.data);
      };
      folderData();
      filterData();
      return;
    }

    if (location.pathname === '/shared') {
      const sampleFolderData = async () => {
        const data = await getSampleFolder();
        setLink(data);
      };

      sampleFolderData();
      return;
    }
  }, []);

  return (
    <>
      {location.pathname === '/folder' && (
        <>
          <div className="folder-menu">
            <div className="folder-filter">
              <button
                className="filter-btn"
                onClick={() => handleClick('all', '전체')}
                key={filter.id}
                name={filter.name}
              >
                전체
              </button>
              {filter.map(filter => {
                return (
                  <button
                    className="filter-btn"
                    onClick={() => handleClick(filter.id, filter.name)}
                    key={filter.id}
                    name={filter.name}
                  >
                    {filter.name}
                  </button>
                );
              })}
            </div>
            <img src="/add.svg" alt="추가하기 로고" />
          </div>

          <div className="selected-folder">
            <p className="selected-folder-name">{selectedFolderName}</p>
            {selectedFolderName !== '전체' ? (
              <div className="selecter-folder-menu">
                <button className="shared-btn">
                  <img src="/share.svg" width="18" alt="공유 아이콘" />
                  <p>공유</p>
                </button>
                <button className="change-name-btn">
                  <img src="/pen.svg" width="18" alt="이름변경 아이콘" />
                  <p>이름변경</p>
                </button>
                <button className="delete-btn">
                  <img src="/delete.svg" width="18" alt="삭제 아이콘" />
                  <p>삭제</p>
                </button>
              </div>
            ) : null}
          </div>

          <div className="card-list">
            {link && link.length > 0 ? (
              link.map(link => {
                return <Card key={link.id} link={link} />;
              })
            ) : (
              <p className="no-link">저장된 링크가 없습니다.</p>
            )}
          </div>
        </>
      )}
      {location.pathname === '/shared' && (
        <div className="card-list">
          {link ? (
            link.links.map(link => {
              return <Card key={link.id} link={link} />;
            })
          ) : (
            <p className="no-link">저장된 링크가 없습니다.</p>
          )}
        </div>
      )}
    </>
  );
}

export default CardList;
