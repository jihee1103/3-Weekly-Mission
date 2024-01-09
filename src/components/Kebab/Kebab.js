import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Kebab.css";

const Kebab = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };
  return (
    <div
      className="kebap"
      onClick={(e) => {
        e.stopPropagation();
        handleView();
      }}
    >
      <img
        className="kebabIcon"
        src={process.env.PUBLIC_URL + `/assets/kebab.png`}
        alt="케밥 버튼"
      />
      {view && <Dropdown></Dropdown>}
    </div>
  );
};

export default Kebab;
