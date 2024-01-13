function SelectedFolder(selectedFolder) {
  return (
    <div className="selected-folder">
      <p className="selected-folder-name">{selectedFolder.name}</p>
      {selectedFolder.name !== '전체' ? (
        <div className="selected-folder-menu">
          <button className="shared-btn">
            <img src="/share.svg" width="18" alt="공유 아이콘" />
            <p>공유</p>
          </button>
          <button className="change-name-btn">
            <img src="/pen.svg" width="18" alt="이름변경 아이콘" />
            <p>이름변경</p>
          </button>
          <button className="delete-btn">
            <img src="/delete.svg" width="18" alt="삭제 아이콘" />
            <p>삭제</p>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default SelectedFolder;
