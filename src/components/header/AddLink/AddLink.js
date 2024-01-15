import { useState, useRef } from "react";
import "./AddLink.css";
import BaseModal from "../../section/BaseModal/BaseModal";

function AddLink({ folderList }) {
  const [openModal, setOpenModal] = useState(false);
  const [folderItem, setFolderItem] = useState();

  const linkInput = useRef();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setFolderItem(null);
    setOpenModal(false);
  };

  return (
    <div className="container-add-link">
      <div className="add-link">
        <div className="add-link-input">
          <img
            className="link-icon"
            src="./images/link.svg"
            alt="클립 아이콘"
          />
          <input
            className="link-input"
            placeholder="링크를 추가해 보세요"
            ref={linkInput}
          />
        </div>
        <button className="cta-add" onClick={handleOpenModal}>
          추가하기
        </button>
        {openModal && (
          <BaseModal closeModal={closeModal}>
            <div className="modal__link-add">
              <span className="modal__name">폴더에 추가</span>
              <span className="modal__link">{linkInput.current.value}</span>
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
          </BaseModal>
        )}
      </div>
    </div>
  );
}

export default AddLink;
