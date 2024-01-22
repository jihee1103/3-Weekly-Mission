import styled from "styled-components";
import { useEffect, useState } from "react";
import IMAGE_URL from "../../constant/imageUrl";
import { getFolderList } from "../../api/api";

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
    padding: 32px 40px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;

    div {
      gap: 24px;
      padding: 0;

      .topArea {
        gap: 8px;
        margin: 0;
        h1 {
          color: #373740;
          font-size: 2rem;
          margin: 0;
        }
      }

      .inputLink {
        color: #9fa6b2;
        font-size: 1.4rem;
        margin: 0;
      }

      .closeIcon {
        position: absolute;
        top: -20px;
        right: -25px;
        cursor: pointer;
      }
    }
    .modalFolderList {
      gap: 4px;
    }

    .modalItem {
      display: flex;
      flex-direction: row;
      padding: 8px;
      gap: 8px;
      cursor: pointer;
      border-radius: 8px;
      position: relative;

      h2 {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        line-height: 14px;
      }

      p {
        color: #9fa6b2;
        font-size: 1.4rem;
        margin: 0;
      }
    }
    .checkIcon {
      position: absolute;
      height: 14px;
      margin-right: 0px;
      right: 8px;
      top: 8px;
    }

    .modalItem:hover {
      background-color: #f0f6ff;
      color: #6d6afe;
    }
    .modalItemCliked {
      background-color: #f0f6ff;
      display: flex;
      flex-direction: row;
      padding: 8px;
      gap: 8px;
      cursor: pointer;

      h2 {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        line-height: 24px;
        color: #6d6afe;
      }

      p {
        color: #9fa6b2;
        font-size: 1.4rem;
        margin: 0;
        padding-top: 4px;
      }
    }

    button {
      width: 280px;
      padding: 16px 20px;
      border-radius: 8px;
      background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
      border: 0px;
      cursor: pointer;

      color: #f5f5f5;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const ModalAddLink = ({ handleClose, link }) => {
  const [folderData, setFolderData] = useState({ data: [] });
  const [itemClick, setItemClick] = useState(null);

  const handleFolderData = async () => {
    const folder = await getFolderList();
    setFolderData(folder);
  };

  const handleItemClick = (index) => {
    setItemClick(index);
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  return (
    <ModalContainer>
      <div>
        <div>
          <div className="topArea">
            <h1>폴더에 추가</h1>
            <p className="inputLink">{link}</p>
          </div>

          <div className="modalFolderList">
            {folderData.data.map((item, index) => (
              <div>
                <div key={index}>
                  <div
                    onClick={() => {
                      handleItemClick(index);
                    }}
                    className={
                      index === itemClick ? "modalItemCliked" : "modalItem"
                    }
                  >
                    <h2>{item.name}</h2>
                    <p>{`${item.link.count}개 링크`}</p>
                  </div>
                  {index === itemClick && (
                    <img
                      className="checkIcon"
                      src={`${IMAGE_URL}/assets/check.png`}
                      alt="체크표시 아이콘"
                    ></img>
                  )}
                </div>
              </div>
            ))}
          </div>

          <img
            className="closeIcon"
            onClick={handleClose}
            src={`${IMAGE_URL}/assets/close.png`}
            alt="닫기버튼"
          />
        </div>
        <button>추가하기</button>
      </div>
    </ModalContainer>
  );
};

export default ModalAddLink;
