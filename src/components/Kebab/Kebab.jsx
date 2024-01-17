import React, { useState } from "react";
import imageData from "../../assets/imageData";
import styled from "./Kebab.module.css";

export default function Kebab({ ModalButtonClick, url }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };

  const handleKebabClick = () => {
    toggleClicked();
  };

  const handleButtonClick = ({ currentTarget }) => {
    ModalButtonClick({ currentTarget, url });
  };

  return (
    <button
      type="button"
      className={styled.container}
      onClick={handleKebabClick}
    >
      <img
        className={styled.Kebab}
        src={imageData.kebabIcon}
        alt="케밥모양 아이콘"
      />
      {isClicked && (
        <div className={styled["hover-container"]}>
          <button
            type="button"
            id="deleteLink"
            onClick={handleButtonClick}
            className={styled.button}
          >
            삭제하기
          </button>
          <button
            type="button"
            id="addLink"
            onClick={handleButtonClick}
            className={styled.button}
          >
            폴더에 추가
          </button>
        </div>
      )}
    </button>
  );
}
