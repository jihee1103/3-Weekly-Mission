import { MouseEvent, useState } from 'react';
import timeDifferenceCalculate from '../../../utils/timeElapsedCalculate';
import DropDown from '../DropDown/DropDown';
import BaseModal from '../BaseModal/BaseModal';
import './Card.css';
import { SharedLink } from '../../../pages/SharePage/SharePage';
import { Link } from '../../../pages/FolderPage/FolderPage';

interface Props {
  page: Link | SharedLink;
  folderList?: { name: string; linkCount: number }[];
}

export default function Card({ page, folderList }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectDropDownItem, setSelectDropDownItem] = useState('');
  const [folderItem, setFolderItem] = useState<string | null | undefined>('');

  const link = page.url;
  const image = page.imageSource || page['image_source'];
  const description = page.description;

  const logo = '/images/logo.svg';
  const divClass = image ? 'image' : 'image default';
  const imgClass = image ? 'preview' : 'preview default-image';

  const upload = new Date(String(page.createdAt || page['created_at']));
  const timeDiff = timeDifferenceCalculate(upload);

  const temp = upload.toLocaleDateString();
  const uploadDate = temp.slice(0, temp.length - 1);

  let modalContent;

  switch (selectDropDownItem) {
    case '삭제하기':
      modalContent = (
        <>
          <div className="modal__link-remove modal--remove">
            <span className="modal__name">링크 삭제</span>
            <span className="modal__link">{link}</span>
          </div>
          <button className="modal__button modal__button--remove">
            변경하기
          </button>
        </>
      );
      break;
    case '폴더에 추가':
      modalContent = (
        <>
          <div className="modal__link-add">
            <span className="modal__name">폴더에 추가</span>
            <span className="modal__link">{link}</span>
          </div>
          <div className="modal__folder-list">
            {folderList &&
              folderList.map((element) => {
                const className =
                  element.name === folderItem
                    ? 'modal__folder--item active'
                    : 'modal__folder--item';
                const onClickFolderItem = (e: MouseEvent) => {
                  setFolderItem(e.currentTarget.firstElementChild?.textContent);
                };

                return (
                  <div
                    key={element.name}
                    className={className}
                    onClick={onClickFolderItem}
                  >
                    <span className="modal__item-name">{element.name}</span>
                    <span className="modal__link-count">
                      {element.linkCount}개 링크
                    </span>
                    {folderItem === element.name && (
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
        </>
      );
      break;
    default:
      <span className="modal__name">의도치 않은 모달입니다</span>;
  }

  const handleOpenModal = (type: string) => {
    setSelectDropDownItem(type);
    setOpenModal(true);
  };

  const closeModal = () => {
    setFolderItem(null);
    setOpenModal(false);
  };

  return (
    <div className="card-container">
      <a href={link} target="_blank" rel="noreferrer" className="card">
        <div className={divClass}>
          <img className={imgClass} src={image || logo} alt="페이지 미리보기" />
          <button>
            <img className="star" src="/images/star.png" alt="별 모양 아이콘" />
          </button>
        </div>
        <div className="card-info">
          <div className="time-difference">
            <span className="upload-ago">{timeDiff} ago</span>
            <div className="card__drop-down">
              <DropDown selectItem={handleOpenModal} />
            </div>
          </div>
          <span className="description">{description}</span>
          <span className="upload-date">{uploadDate}</span>
        </div>
      </a>
      {openModal && (
        <BaseModal closeModal={closeModal}>{modalContent}</BaseModal>
      )}
    </div>
  );
}
