import React, { useState, useEffect } from "react";
import "./Modal.css";
import { getUserFolders } from "../api";

export const AddToFolderModal = ({ closeModal }) => {
  const [FolderList, setFolderList] = useState([]);
  useEffect(() => {
    async function handleload() {
      const { data } = await getUserFolders(1);
      setFolderList(data);
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
      <div>
        <div className="modal-title">폴더에 추가하기</div>
        <div>주소</div>
      </div>
      <ul>
        {FolderList.map((folder) => {
          return (
            <li key={folder.id}>
              <div>{folder.name}</div>
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
    <button
      className="modal-button-blue"
      onClick={() => closeModal("addFolder")}
    >
      추가하기
    </button>
  </>
);

export const ShareModal = ({ closeModal }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title">폴더 공유</div>
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
        <img src="/imgs/링크복사아이콘.png" alt="링크복사" />
        링크 복사
      </div>
    </div>
    <button className="modal-button-blue" onClick={() => closeModal("share")}>
      닫기
    </button>
  </>
);

export const RenameModal = ({ closeModal }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title">폴더 이름 변경</div>
    {/* 이름 변경 모달 내용 */}
    <button className="modal-button-blue" onClick={() => closeModal("rename")}>
      변경하기
    </button>
  </>
);

export const DeleteFolderModal = ({ closeModal }) => (
  <>
    <img
      src="/imgs/_close.png"
      className="closeModal"
      onClick={closeModal}
      alt="나가기"
    />
    <div className="modal-title">폴더 삭제</div>
    {/* 폴더 삭제 모달 내용 */}
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
    <div>
      <div className="modal-title">링크 삭제</div>
      <div>{selectedModalItem.url}</div>
    </div>

    <button
      className="modal-button-red"
      onClick={() => closeModal("deleteItem")}
    >
      삭제하기
    </button>
  </>
);
