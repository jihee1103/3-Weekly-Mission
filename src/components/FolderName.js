import "./FolderName.css";
export default function FolderName({ selectedFolder, onOpenModal }) {
  const handleModal = (modal) => {
    onOpenModal(modal);
  };
  return (
    <div className="folder-name-box">
      <div className="folder-name">
        {selectedFolder ? selectedFolder.name : "전체"}
      </div>
      {selectedFolder && (
        <div className="folder-edit-box">
          <div onClick={() => handleModal("share")}>
            <img src="/imgs/share.png" alt="공유하기" />
            <span>공유</span>
          </div>
          <div onClick={() => handleModal("rename")}>
            <img src="/imgs/pen.png" alt="이름변경하기" />
            <span>이름변경</span>
          </div>
          <div onClick={() => handleModal("deleteFolder")}>
            <img src="/imgs/delete.png" alt="삭제하기" />
            <span>삭제</span>
          </div>
        </div>
      )}
    </div>
  );
}
