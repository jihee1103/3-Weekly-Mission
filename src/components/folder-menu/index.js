function FolderMenu({ folder, selectedFolder, handleClick }) {
  return (
    <div className="folder-menu">
      <div className="folder-categories">
        <button
          className={`folder-btn ${
            selectedFolder.id === 'all' ? 'folder-btn__selected' : ''
          }`}
          onClick={() => handleClick('all', '전체')}
          key={folder.id}
          name={folder.name}
        >
          전체
        </button>
        {folder.map(folder => {
          return (
            <button
              className={`folder-btn ${
                selectedFolder.id === folder.id ? 'folder-btn__selected' : ''
              }`}
              onClick={() => handleClick(folder.id, folder.name)}
              key={folder.id}
              name={folder.name}
            >
              {folder.name}
            </button>
          );
        })}
      </div>
      <img className="add-icon" src="/add.svg" alt="+ 아이콘" />
    </div>
  );
}

export default FolderMenu;
