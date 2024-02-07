import { ChangeEvent, useState } from 'react';
import './AddLink.css';
import BaseModal from '../../section/BaseModal/BaseModal';

interface Props {
  folderList: { name: string; linkCount: number }[];
  className?: string;
}

export default function AddLink({ folderList, className }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [folderItem, setFolderItem] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setFolderItem(null);
    setOpenModal(false);
  };

  return (
    <div className={`container-add-link ${className}`}>
      <div className="add-link">
        <div className="add-link-input">
          <img className="link-icon" src="/images/link.svg" alt="클립 아이콘" />
          <input
            className="link-input"
            placeholder="링크를 추가해 보세요"
            onChange={handleInputValueChange}
          />
        </div>
        <button className="cta-add" onClick={handleOpenModal}>
          추가하기
        </button>
        {openModal && (
          <BaseModal closeModal={closeModal}>
            <div className="modal__link-add">
              <span className="modal__name">폴더에 추가</span>
              <span className="modal__link">{inputValue}</span>
            </div>
            <div className="modal__folder-list">
              {folderList.map((folder) => {
                const className =
                  folder.name === folderItem
                    ? 'modal__folder--item active'
                    : 'modal__folder--item';
                const onClickFolderItem = () => {
                  setFolderItem(folder.name);
                };

                return (
                  <div
                    key={folder.name}
                    className={className}
                    onClick={onClickFolderItem}
                  >
                    <span className="modal__item-name">{folder.name}</span>
                    <span className="modal__link-count">
                      {folder.linkCount}개 링크
                    </span>
                    {folderItem === folder.name && (
                      <img
                        className="modal__check-icon"
                        src="/images/check.png"
                        alt="체크 아이콘"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <button className="modal__button cta">추가하기</button>
          </BaseModal>
        )}
      </div>
    </div>
  );
}
