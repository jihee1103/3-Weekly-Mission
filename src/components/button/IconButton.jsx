import styles from "./IconButton.module.css";
import classNames from "classnames";

function IconButton({
  children,
  className,
  onClick = () => console.log("share"),
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
