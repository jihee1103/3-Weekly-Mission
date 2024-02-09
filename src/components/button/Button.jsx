import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ className, children, onModalClick, value }) {
  const handleClick = (e) => {
    e.preventDefault();
    const modalType = e.currentTarget.value;
    onModalClick(modalType);
  };
  return (
    <button
      className={classNames(styles.button, className)}
      value={value}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
