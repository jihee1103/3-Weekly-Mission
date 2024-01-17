import React from "react";
import imageData from "../../assets/imageData";
import styled from "./FloatingActionButton.module.css";

export default function FloatingActionButton() {
  return (
    <button type="button" className={styled.floating}>
      <span>폴더추가</span>
      <img src={imageData.folderPulsIcon} alt="폴더추가하기 아이콘" />
    </button>
  );
}
