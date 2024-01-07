import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getSampleFolder,
  getFilter,
  getFolder,
  getFolderByFolderId,
} from '../../api';
import Card from './card';
import './style.css';

function CardList() {
  const [link, setLink] = useState();
  const [filter, setFilter] = useState([]);
  const [selectedFolderName, setSelectedFolderName] = useState('');
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [activeKebab, setActiveKebab] = useState(null);
  const location = useLocation();

  const handleClick = async (folderId, folderName) => {
    setSelectedFolderName(folderName);
    setSelectedFolderId(folderId);
    try {
      const data = await getFolderByFolderId(folderId);
      setLink(data?.data);
    } catch (error) {
      console.error(`Error: ${error}`);
      setLink([]);
    }
  };

  useEffect(() => {
    if (location.pathname === '/folder') {
      (async () => {
        const data = await getFolder();
        setLink(data);
      })();
      (async () => {
        const data = await getFilter();
        setFilter(data?.data);
      })();
      return;
    }

    if (location.pathname === '/shared') {
      (async () => {
        const data = await getSampleFolder();
        setLink(data);
      })();
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
                className={`filter-btn ${
                  selectedFolderId === 'all' ? 'filter-btn__selected' : ''
                }`}
                onClick={() => handleClick('all', '전체')}
                key={filter.id}
                name={filter.name}
              >
                전체
              </button>
              {filter.map(filter => {
                return (
                  <button
                    className={`filter-btn ${
                      selectedFolderId === filter.id
                        ? 'filter-btn__selected'
                        : ''
                    }`}
                    onClick={() => handleClick(filter.id, filter.name)}
                    key={filter.id}
                    name={filter.name}
                  >
                    {filter.name}
                  </button>
                );
              })}
            </div>
            <img className="add-icon" src="/add.svg" alt="+ 아이콘" />
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
                return (
                  <Card
                    key={link.id}
                    link={link}
                    isActive={activeKebab === link.id}
                    onKebabToggle={() => setActiveKebab(link.id)}
                  />
                );
              })
            ) : (
              <p className="no-link">저장된 링크가 없습니다.</p>
            )}
          </div>
          <button className="add-folder-btn">
            <p>폴더 추가</p>
            <img src="/add-white.svg" alt="+ 아이콘" />
          </button>
        </>
      )}

      {location.pathname === '/shared' && (
        <div className="card-list">
          {link ? (
            link.links.map(link => {
              return (
                <Card
                  key={link.id}
                  link={link}
                  isActive={activeKebab === link.id}
                  onKebabToggle={() => setActiveKebab(link.id)}
                />
              );
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
