import styled from "styled-components";
import IMAGE_URL from "../../constant/imageUrl";
import { useFolderNameContext } from "../../context/FolderNameContext";

import { useState } from "react";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default;

  div {
    background: white;
    padding: 32px 74px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .closeButton {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    div {
      gap: 8px;
      padding: 0;

      h1 {
        color: #373740;
        font-size: 2rem;
        margin: 0;
      }

      p {
        color: #9fa6b2;
        font-size: 1.4rem;
        margin: 0;
      }
    }

    .iconArea {
      display: flex;
      flex-direction: row;
      gap: 32px;
      .oneIconArea {
        display: block;
      }
    }
  }
`;

const ModalShareFolder = ({ handleClose }) => {
  const { folderName } = useFolderNameContext();

  return (
    <ModalContainer>
      <div>
        <div>
          <h1>폴더 공유</h1>
          <p>{folderName}</p>
        </div>

        <div className="iconArea">
          <div className="oneIconArea">
            <img
              onClick={handleClose}
              src={`${IMAGE_URL}/assets/modal_kakao.png`}
              alt="close"
            />
            <p>카카오톡</p>
          </div>
          <div className="oneIconArea">
            <img
              onClick={handleClose}
              src={`${IMAGE_URL}/assets/modal_facebook.png`}
              alt="close"
            />
            <p>페이스북</p>
          </div>
          <div className="oneIconArea">
            <img
              onClick={handleClose}
              src={`${IMAGE_URL}/assets/modal_link.png`}
              alt="close"
            />
            <p>링크 복사</p>
          </div>
        </div>

        <img
          className="closeButton"
          onClick={handleClose}
          src={`${IMAGE_URL}/assets/close.png`}
          alt="close"
        />
      </div>
    </ModalContainer>
  );
};

export default ModalShareFolder;
