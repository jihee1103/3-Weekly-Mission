import React, { useState, useEffect } from "react";
import "./Modal.css";
import { getUserFolders } from "../../api";
import { copyToClipboard } from "../common/Utils";

export const AddToFolderModal = ({ closeModal }) => {
  const [FolderList, setFolderList] = useState();
  useEffect(() => {
    async function handleload() {
      setFolderList(await getUserFolders(4));
    }
    handleload();
  }, []);
  return (
    <>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title-box">
        <div className="modal-title">폴더에 추가하기</div>
        <div className="modal-title-subtitle">링크 주소</div>
      </div>
      <ul className="addToFolderModal-folderList">
        {FolderList?.map((folder) => {
          return (
            <li className="addToFolderModal-folderName-box" key={folder.id}>
              <div className="addToFolderModal-folderName">{folder.name}</div>
              <div className="addToFolderModal-folderLinkLength">{`${folder.link.count}개 링크`}</div>
            </li>
          );
        })}
      </ul>

      <button
        className="modal-button-blue"
        onClick={() => closeModal("addToFolder")}
      >
        추가하기
      </button>
    </>
  );
};

export const AddFolderModal = ({ closeModal }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title">폴더 추가</div>
    <input className="modal-input" />
    <button
      className="modal-button-blue"
      onClick={() => closeModal("addFolder")}
    >
      추가하기
    </button>
  </>
);

export const ShareModal = ({ closeModal, selectedModalItem }) => {
  return (
    <>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title-box">
        <div className="modal-title">폴더 공유</div>
        <div className="modal-title-subtitle">{selectedModalItem}</div>
      </div>
      <div className="shareIcon-box">
        <div className="shareIcon">
          <img src="/imgs/카카오톡아이콘.png" alt="카카오톡" />
          카카오톡
        </div>
        <div className="shareIcon">
          <img src="/imgs/페이스북아이콘.png" alt="페이스북" />
          페이스북
        </div>
        <div className="shareIcon">
          <img
            onClick={copyToClipboard}
            src="/imgs/링크복사아이콘.png"
            alt="링크복사"
          />
          링크 복사
        </div>
      </div>
      <button className="modal-button-blue" onClick={() => closeModal("share")}>
        닫기
      </button>
    </>
  );
};

export const RenameModal = ({ closeModal, selectedModalItem }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title">폴더 이름 변경</div>
    <input className="modal-input" defaultValue={selectedModalItem} />
    <button className="modal-button-blue" onClick={() => closeModal("rename")}>
      변경하기
    </button>
  </>
);

export const DeleteFolderModal = ({ closeModal, selectedModalItem }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title-box">
      <div className="modal-title">폴더 삭제</div>
      <div className="modal-title-subtitle">{selectedModalItem}</div>
    </div>
    <button
      className="modal-button-red"
      onClick={() => closeModal("deleteFolder")}
    >
      삭제하기
    </button>
  </>
);

export const DeleteItemModal = ({ closeModal, selectedModalItem }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title-box">
      <div className="modal-title">링크 삭제</div>
      <div className="modal-title-subtitle">{selectedModalItem.url}</div>
    </div>
    <button
      className="modal-button-red"
      onClick={() => closeModal("deleteItem")}
    >
      삭제하기
    </button>
  </>
);
