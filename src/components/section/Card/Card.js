import { useState } from "react";
import timeDifferenceCalculate from "../../../utils/timeDifferenceCalculate";
import DropDown from "../DropDown/DropDown";
import BaseModal from "../BaseModal/BaseModal";
import "./Card.css";

function Card({ page, folderList }) {
  const [dropDown, setDropDown] = useState(false);
  const [dropLeft, setDropLeft] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectDropDownItem, setSelectDropDownItem] = useState();
  const [folderItem, setFolderItem] = useState();

  const link = page.url;
  const image = page.imageSource || page["image_source"];
  const description = page.description;

  const logo = "./images/logo.svg";
  const divClass = image ? "image" : "image default";
  const imgClass = image ? "preview" : "preview default-image";

  const upload = new Date(page.createdAt || page["created_at"]);
  const timeDiff = timeDifferenceCalculate(upload);

  const temp = upload.toLocaleDateString();
  const uploadDate = temp.slice(0, temp.length - 1);

  let modalContent;

  switch (selectDropDownItem) {
    case "삭제하기":
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
    case "폴더에 추가":
      modalContent = (
        <>
          <div className="modal__link-add">
            <span className="modal__name">폴더에 추가</span>
            <span className="modal__link">{link}</span>
          </div>
          <div className="modal__folder-list">
            {folderList.map((element) => {
              const className =
                element[0] === folderItem
                  ? "modal__folder--item active"
                  : "modal__folder--item";
              const onClickFolderItem = (e) => {
                setFolderItem(e.currentTarget.firstElementChild.textContent);
              };

              return (
                <>
                  <div className={className} onClick={onClickFolderItem}>
                    <span className="modal__item-name">{element[0]}</span>
                    <span className="modal__link-count">
                      {element[1]}개 링크
                    </span>
                    {folderItem === element[0] && (
                      <img
                        className="modal__check-icon"
                        src="./images/check.png"
                        alt="체크 아이콘"
                      />
                    )}
                  </div>
                </>
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

  const handleShowDropDown = (e) => {
    e.preventDefault();
    if (e.clientX + 100 >= window.innerWidth) {
      setDropLeft(true);
    } else setDropLeft(false);

    setDropDown(!dropDown);
  };

  const handleOpenModal = (type) => {
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
            <img
              className="star"
              src="./images/star.png"
              alt="별 모양 아이콘"
            />
          </button>
        </div>
        <div className="card-info">
          <div className="time-difference">
            <span className="upload-ago">{timeDiff} ago</span>
            <div className="card__drop-down">
              <button className="kebab" onClick={handleShowDropDown}>
                ···
              </button>
              {dropDown && (
                <DropDown dropLeft={dropLeft} selectItem={handleOpenModal} />
              )}
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

export default Card;
