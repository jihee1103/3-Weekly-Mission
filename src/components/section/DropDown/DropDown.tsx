import { MouseEvent, useState } from 'react';
import './DropDown.css';

interface Props {
  selectItem: (value: string) => void;
}

export default function DropDown({ selectItem }: Props) {
  const [dropDown, setDropDown] = useState(false);
  const [dropLeft, setDropLeft] = useState(false);

  const className = dropLeft ? 'drop-down left' : 'drop-down';

  const onClickDropDownItem = (e: MouseEvent) => {
    e.preventDefault();
    if (e.currentTarget.textContent) {
      selectItem(e.currentTarget.textContent);
    }
  };

  const handleShowDropDown = (e: MouseEvent) => {
    e.preventDefault();
    if (e.clientX + 100 >= window.innerWidth) {
      setDropLeft(true);
    } else setDropLeft(false);

    setDropDown(!dropDown);
  };

  return (
    <>
      <button className="kebab" onClick={handleShowDropDown}>
        ···
      </button>
      {dropDown && (
        <div className={className}>
          <div className="drop-down__item" onClick={onClickDropDownItem}>
            삭제하기
          </div>
          <div className="drop-down__item" onClick={onClickDropDownItem}>
            폴더에 추가
          </div>
        </div>
      )}
    </>
  );
}
