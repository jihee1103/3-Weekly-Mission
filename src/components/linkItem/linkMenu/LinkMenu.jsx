import { useCallback, useEffect, useState } from "react";
import styles from "./LinkMenu.module.css";

export function LinkMenu({ onModalClick, isShared = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  const handleModalClick = (e) => {
    const modalType = e.currentTarget.getAttribute("value");
    onModalClick(modalType);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.menu}>
      {isShared || <KebabButton onClick={handleClick} />}
      {isOpen && (
        <ul className={styles.popup}>
          <li value="DELETE_LINK" onClick={handleModalClick}>
            삭제하기
          </li>
          <li value="ADD_LINK" onClick={handleModalClick}>
            폴더에 추가
          </li>
        </ul>
      )}
    </div>
  );
}

function KebabButton({ onClick }) {
  return (
    <button
      style={{
        padding: "0",
        borderStyle: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg
        width="21"
        height="17"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3.5" cy="8.5" r="1.5" fill="#333236" />
        <circle cx="10.5" cy="8.5" r="1.5" fill="#333236" />
        <circle cx="17.5" cy="8.5" r="1.5" fill="#333236" />
      </svg>
    </button>
  );
}

export default LinkMenu;
