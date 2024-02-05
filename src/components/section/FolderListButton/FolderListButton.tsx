import './FolderListButton.css';

function FolderListButton({
  folderName,
  onClickFolder,
  buttonName,
  id = undefined,
}) {
  const className =
    folderName === buttonName ? 'list-button active' : 'list-button';
  const onClick = (e) => {
    onClickFolder(e.target.textContent, id);
  };

  return (
    <button className={className} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export default FolderListButton;
