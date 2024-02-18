import { useState } from "react";
import { formatCreatedAt, getTimeDifference } from "../../utils/Utils";
import { CardProps } from "../../types/types";
import { UserLink } from "../../api/api";
import { AddToFolderModal, DeleteItemModal } from "./Modal";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Card({ item }: CardProps) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [selectedModal, setSelectedModal] = useState<"add" | "delete" | null>(
    null
  );

  const handleModalAddtoFolder = () => {
    setSelectedModal("add");
  };
  const handleModalDeleteItem = (item: UserLink) => {
    setSelectedModal("delete");
  };
  const closeModal = () => {
    setSelectedModal(null);
  };

  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };
  const handlePopoverToggle = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };
  const handleOnBlur = () => {
    setIsPopoverVisible(false);
  };
  return (
    <>
      <li className={cx("card")}>
        <div className={cx("card-img-div")}>
          <img
            onClick={() => openNewWindow(item.url)}
            className={cx("card-img")}
            src={
              item.image_source ||
              "/images/01_모코코콘1_16_백색모코코_물음표.png"
            }
            alt="카드사진"
          />
          <img
            className={cx("star-img")}
            src="/images/star.png"
            alt="즐겨찾기 등록"
          />
        </div>
        <div className={cx("card-contents")}>
          <div className={cx("card-time-ago-box")}>
            <p className={cx("card-time-ago")}>
              {getTimeDifference(item.created_at)}
            </p>
            <button
              className={cx("kebab-button")}
              onClick={handlePopoverToggle}
              onBlur={handleOnBlur}
            >
              <img src="/images/kebab.png" alt="파일수정" />
              {isPopoverVisible && (
                <div className={cx("popover-box")}>
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
            className={cx("card-description")}
          >
            {item.description}
          </p>
          <p className={cx("card-createdat")}>
            {formatCreatedAt(item.created_at)}
          </p>
        </div>
      </li>
      {selectedModal === "add" && <AddToFolderModal closeModal={closeModal} />}
      {selectedModal === "delete" && (
        <DeleteItemModal closeModal={closeModal} selectedModalItem={item} />
      )}
    </>
  );
}
