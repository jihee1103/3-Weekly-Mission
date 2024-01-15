import { useEffect, useState } from "react";
import { getUserLinks } from "../../api";
import { getTimeDifference, formatCreatedAt } from "../common/Utils";
import useModals from "../../hooks/useModals";
import Modals from "./Modals";
import styled from "styled-components";

export default function FolderContentCard({ selectedFolder }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function handleload() {
      if (selectedFolder === "전체") {
        const { data } = await getUserLinks(1);
        setItems(data);
      } else {
        const { id } = selectedFolder;
        const { data } = await getUserLinks(1, id);
        setItems(data);
      }
    }
    handleload();
  }, [selectedFolder]);
  return (
    <>
      <Cards>
        {items.length > 0 ? (
          items.map((item) => {
            return <LITag item={item} key={item.id} />;
          })
        ) : (
          <div className="no-save-link">
            저장된 링크가 없습니다
            <img src="/imgs/03_땡깡-1.gif" alt="폴더에 링크를 추가해주세요" />
          </div>
        )}
      </Cards>
    </>
  );
}

function LITag({ item }) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const openNewWindow = (url) => {
    window.open(url, "_blank");
  };
  const handlePopoverToggle = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };
  const { openModal, closeModal, modal } = useModals();
  const handleModalAddtoFolder = () => {
    openModal({ type: "addToFolder", props: null });
  };
  const handleModalDeleteItem = (item) => {
    openModal({ type: "deleteItem", props: item });
  };
  const handleOnBlur = () => {
    setIsPopoverVisible(false);
  };
  return (
    <>
      <li className="card">
        <div className="card-img-div">
          <img
            onClick={() => openNewWindow(item.url)}
            className="card-img"
            src={
              item.image_source || "/imgs/01_모코코콘1_16_백색모코코_물음표.png"
            }
            alt="카드사진"
          />
          <img className="star-img" src="/imgs/star.png" alt="즐겨찾기 등록" />
        </div>
        <div className="card-contents">
          <div className="card-time-ago-box">
            <p className="card-time-ago">
              {getTimeDifference(item.created_at)}
            </p>
            <button
              className="kebab-button"
              onClick={handlePopoverToggle}
              onBlur={handleOnBlur}
            >
              <img src="/imgs/kebab.png" alt="파일수정" />
              {isPopoverVisible && (
                <div className="popover-box">
                  <div onClick={() => handleModalDeleteItem(item)}>
                    삭제하기
                  </div>
                  <div onClick={handleModalAddtoFolder}>폴더에 추가</div>
                </div>
              )}
            </button>
          </div>
          <p
            onClick={() => openNewWindow(item.url)}
            className="card-description"
          >
            {item.description}
          </p>
          <p className="card-createdat">{formatCreatedAt(item.created_at)}</p>
        </div>
      </li>
      <Modals modal={modal} closeModal={closeModal} />
    </>
  );
}

const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  .card {
    overflow: visible;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 34rem;
    height: 33.4rem;
    border-radius: 1.5rem;
    cursor: pointer;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  }

  .card:hover .card-img {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

  .card:hover .card-contents {
    background-color: #f0f6ff;
  }

  .card-img-div {
    position: relative;
    width: 34rem;
    height: 20rem;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .star-img {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .card-contents {
    position: relative;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
  }

  .card-time-ago-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.1rem;
    height: 1.6rem;
  }

  .card-time-ago {
    color: #666;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .kebab-button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  .popover-box {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    background-color: #ffffff;
    color: var(--gray-light-gray-100, #333236);
    position: absolute;
    right: -35px;
    top: 30px;
  }

  .popover-box div {
    display: flex;
    justify-content: center;
    padding: 7px 12px;
  }

  .popover-box div:hover {
    color: var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
  }

  .card-description {
    width: 100%;
    height: 4.9rem;
    margin-bottom: 1rem;

    color: #000;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .card-createdat {
    height: 1.9rem;
    color: #333;

    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .no-save-link {
    display: flex;
    padding: 41px 0px 35px 0px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;
