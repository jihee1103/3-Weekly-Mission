import { useState } from 'react';
import './DropDown.css';

function DropDown({ selectItem }) {
  const [dropDown, setDropDown] = useState(false);
  const [dropLeft, setDropLeft] = useState(false);

  const className = dropLeft ? 'drop-down left' : 'drop-down';

  const onClickDropDownItem = (e) => {
    e.preventDefault();
    selectItem(e.target.textContent);
  };

  const handleShowDropDown = (e) => {
    e.preventDefault();
    if (e.clientX + 100 >= window.innerWidth) {
      setDropLeft(true);
    } else setDropLeft(false);

    setDropDown(!dropDown);
  };

  return (
    <>
      <button className='kebab' onClick={handleShowDropDown}>
        ···
      </button>
      {dropDown && (
        <div className={className}>
          <div className='drop-down__item' onClick={onClickDropDownItem}>
            삭제하기
          </div>
          <div className='drop-down__item' onClick={onClickDropDownItem}>
            폴더에 추가
          </div>
        </div>
      )}
    </>
  );
}

export default DropDown;
