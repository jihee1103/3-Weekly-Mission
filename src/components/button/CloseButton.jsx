import classNames from "classnames";
import styles from "./CloseButton.module.css";

function CloseButton({ className, onModalCloseClick }) {
  const handleClick = () => onModalCloseClick();
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#E7EFFB" />
        <path
          d="M8 8L16 16"
          stroke="#9FA6B2"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M16 8L8 16"
          stroke="#9FA6B2"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  );
}

export default CloseButton;
