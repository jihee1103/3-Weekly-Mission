import styled from "styled-components";
import { ModalProps } from "../../types";
import { UserFolder, getUserFolders } from "../../api";
import { useEffect, useState } from "react";
import { copyToClipboard } from "../common/Utils";

export const AddToFolderModal = ({ closeModal }: ModalProps) => {
  const [FolderList, setFolderList] = useState<UserFolder[]>();
  useEffect(() => {
    async function handleload() {
      setFolderList(await getUserFolders(4));
    }
    handleload();
  }, []);
  return (
    <ModalOverlay>
      <ModalContent>
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
        <button className="modal-button-blue" onClick={closeModal}>
          추가하기
        </button>
      </ModalContent>
    </ModalOverlay>
  );
};

export const AddFolderModal = ({ closeModal }: ModalProps) => (
  <ModalOverlay>
    <ModalContent>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title">폴더 추가</div>
      <input className="modal-input" />
      <button className="modal-button-blue" onClick={closeModal}>
        추가하기
      </button>
    </ModalContent>
  </ModalOverlay>
);

export const ShareModal = ({ closeModal, selectedModalName }: ModalProps) => (
  <ModalOverlay>
    <ModalContent>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title-box">
        <div className="modal-title">폴더 공유</div>
        <div className="modal-title-subtitle">{selectedModalName}</div>
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
      <button className="modal-button-blue" onClick={closeModal}>
        닫기
      </button>
    </ModalContent>
  </ModalOverlay>
);

export const RenameModal = ({ closeModal, selectedModalName }: ModalProps) => (
  <ModalOverlay>
    <ModalContent>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title">폴더 이름 변경</div>
      <input className="modal-input" defaultValue={selectedModalName} />
      <button className="modal-button-blue" onClick={closeModal}>
        변경하기
      </button>
    </ModalContent>
  </ModalOverlay>
);

export const DeleteFolderModal = ({
  closeModal,
  selectedModalName,
}: ModalProps) => (
  <ModalOverlay>
    <ModalContent>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title-box">
        <div className="modal-title">폴더 삭제</div>
        <div className="modal-title-subtitle">{selectedModalName}</div>
      </div>
      <button className="modal-button-red" onClick={closeModal}>
        삭제하기
      </button>
    </ModalContent>
  </ModalOverlay>
);

export const DeleteItemModal = ({
  closeModal,
  selectedModalItem,
}: ModalProps) => (
  <ModalOverlay>
    <ModalContent>
      <img
        src="/imgs/_close.png"
        className="closeModal"
        onClick={closeModal}
        alt="나가기"
      />
      <div className="modal-title-box">
        <div className="modal-title">링크 삭제</div>
        <div className="modal-title-subtitle">{selectedModalItem?.url}</div>
      </div>
      <button className="modal-button-red" onClick={closeModal}>
        삭제하기
      </button>
    </ModalContent>
  </ModalOverlay>
);

const ModalContent = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 360px;
  padding: 32px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(--Gray-White, #fff);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .closeModal {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .modal-button-blue {
    color: var(--Grey-Light, #f5f5f5);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: none;
    background: var(
      --gra-purpleblue-to-skyblue,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
  }

  .modal-button-red {
    color: var(--Grey-Light, #f5f5f5);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: none;
    background: var(--Linkbrary-red, #ff5b56);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-title-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .modal-title {
    color: var(--Linkbrary-gray100, #373740);
    font-size: 20px;
    font-weight: 700;
  }

  .modal-title-subtitle {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  .modal-input {
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
  }

  .shareIcon-box {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .addToFolderModal-folderList {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 280px;
    height: 172px;
    overflow-y: scroll;
  }

  .addToFolderModal-folderName-box {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
  }

  .addToFolderModal-folderName {
    color: var(--Linkbrary-gray100, #373740);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .addToFolderModal-folderLinkLength {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-size: 14px;
    font-weight: 400;
  }
`;

const ModalOverlay = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
