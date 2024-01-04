import "./ListButton.css";

function ListButton({ listName, onClickList, children, id = undefined }) {
  const className =
    listName === children ? "list-button active" : "list-button";
  const onClick = (e) => {
    onClickList(e.target.textContent, id);
  };

  return (
    <button type="radio" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default ListButton;
