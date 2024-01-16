import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getFoldersById } from "../../../api";
import FolderListButton from "../FolderListButton/FolderListButton";
import BaseModal from "../BaseModal/BaseModal";
import "./FolderList.css";

const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  @media (max-width: 767px) {
    content: url("./images/addwhite.png");
  }
`;

function FolderList({ onClickList, id, listName }) {
  const [folders, setFolders] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onClickAddFolder = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    async function getFolders() {
      const { data } = await getFoldersById(id);
      if (!data) return;
      setFolders(data);
    }

    getFolders();
  }, [id]);

  return (
    <>
      <div className="folder-list">
        <div className="buttons">
          <FolderListButton
            listName={listName}
            onClickList={onClickList}
            buttonName="전체"
          >
            전체
          </FolderListButton>
          {folders.map((element) => {
            return (
              <FolderListButton
                key={element.id}
                id={element.id}
                onClickList={onClickList}
                listName={listName}
                buttonName={element.name}
              >
                {element.name}
              </FolderListButton>
            );
          })}
        </div>
        <div className="add-list">
          <input className="add-list-input" />
          <Img
            className="add-list-button"
            src="./images/addpurple.png"
            alt="+ 아이콘"
            onClick={onClickAddFolder}
          />
        </div>
      </div>
      {openModal && (
        <BaseModal closeModal={closeModal}>
          <span className="modal__name">폴더 추가</span>
          <div className="modal__folder-add">
            <input className="modal__input" placeholder="내용 입력" />
            <button className="modal__button cta">추가하기</button>
          </div>
        </BaseModal>
      )}
    </>
  );
}

export default FolderList;
