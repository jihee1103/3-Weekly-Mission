import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Kebab.module.css";

const Kebab = (link) => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };
  return (
    <div
      className={styles.kebap}
      onClick={(e) => {
        e.stopPropagation();
        handleView();
      }}
    >
      <img
        className={styles.kebabIcon}
        src={`/assets/kebab.png`}
        alt="케밥 버튼"
      />
      {view && <Dropdown link={link}></Dropdown>}
    </div>
  );
};

export default Kebab;
