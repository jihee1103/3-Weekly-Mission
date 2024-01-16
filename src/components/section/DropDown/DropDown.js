import "./DropDown.css";

function DropDown({ dropLeft, selectItem }) {
  const className = dropLeft ? "drop-down left" : "drop-down";

  const onClickDropDownItem = (e) => {
    e.preventDefault();
    selectItem(e.target.textContent);
  };

  return (
    <div className={className}>
      <div className="drop-down__item" onClick={onClickDropDownItem}>
        삭제하기
      </div>
      <div className="drop-down__item" onClick={onClickDropDownItem}>
        폴더에 추가
      </div>
    </div>
  );
}

export default DropDown;
