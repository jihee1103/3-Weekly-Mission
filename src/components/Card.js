import noImgLogo from "../assets/no-img-logo.svg";
import useModal from "../hooks/useModal";
import calculateWhenItIsCreated from "../utils/calculateWhenItIsCreated";
import formatDate from "../utils/formatDate";
import "./Card.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Card({ data }) {
  const {
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
    title,
  } = data;

  const formattedDate = formatDate(createdAt || created_at);
  const timeAgo = calculateWhenItIsCreated(createdAt || created_at);

  const classNames =
    imageSource || image_source ? "card-img" : "card-img no-img";
    
  const [popoverState, setPopoverState] = useState(false);
  const [modalState, setModalState, handleModalCancel] = useModal();

  return (
    <a className="card" onClick={() => window.open(url, "_blank")}>
      <Modal state={modalState} onClick={handleModalCancel} />
      <div className="card-img-container">
        <img
          className={classNames}
          src={imageSource || image_source || noImgLogo}
          alt={title}
        />
      </div>
      <div className="mention-wrapper">
        <p className="time-and-kebob-wrapper">
          <span className="upload-time-ago">{timeAgo}</span>
          <button
            className="kebab-btn"
            onClick={(e) => {
              e.stopPropagation();
              setPopoverState(!popoverState);
            }}
          ></button>
        </p>
        {popoverState ? (
          <div className="popover">
            <button
              className="popover-btn"
              onClick={(e) => {
                e.stopPropagation();
                setModalState({ state: true, target: e.target.innerText, url });
              }}
            >
              삭제하기
            </button>
            <button
              className="popover-btn"
              onClick={(e) => {
                e.stopPropagation();
                setModalState({ state: true, target: e.target.innerText, url });
              }}
            >
              폴더에 추가
            </button>
          </div>
        ) : (
          ""
        )}
        <p className="description">{description}</p>
        <p className="upload-date">{formattedDate}</p>
      </div>
    </a>
  );
}
