import "./FolderListButton.css";

function FolderListButton({
  listName,
  onClickList,
  buttonName,
  id = undefined,
}) {
  const className =
    listName === buttonName ? "list-button active" : "list-button";
  const onClick = (e) => {
    onClickList(e.target.textContent, id);
  };

  return (
    <button className={className} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export default FolderListButton;
