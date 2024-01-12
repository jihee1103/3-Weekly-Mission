import styled from "styled-components";
import useModals from "../../hooks/useModals";
import Modals from "./Modals";
export default function FolderName({ selectedFolder }) {
  const { openModal, closeModal, modal } = useModals();
  const handleOpenModalShare = () => {
    openModal({ type: "share", props: selectedFolder.name });
  };
  const handleOpenModalRename = () => {
    openModal({ type: "rename", props: selectedFolder.name });
  };
  const handleOpenModalDeleteFolder = () => {
    openModal({ type: "deleteFolder", props: selectedFolder.name });
  };
  return (
    <>
      <FolderNameBox>
        <div className="folder-name">
          {selectedFolder ? selectedFolder.name : "전체"}
        </div>
        {selectedFolder && (
          <div className="folder-edit-box">
            <div onClick={handleOpenModalShare}>
              <img src="/imgs/share.png" alt="공유하기" />
              <span>공유</span>
            </div>
            <div onClick={handleOpenModalRename}>
              <img src="/imgs/pen.png" alt="이름변경하기" />
              <span>이름변경</span>
            </div>
            <div onClick={handleOpenModalDeleteFolder}>
              <img src="/imgs/delete.png" alt="삭제하기" />
              <span>삭제</span>
            </div>
          </div>
        )}
      </FolderNameBox>
      <Modals modal={modal} closeModal={closeModal} />
    </>
  );
}

const FolderNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .folder-name {
    font-size: 24px;
    font-weight: 600;
  }

  .folder-edit-box {
    display: flex;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    color: var(--Linkbrary-gray60, #9fa6b2);
  }

  .folder-edit-box div {
    display: flex;
    align-items: center;
  }
`;
