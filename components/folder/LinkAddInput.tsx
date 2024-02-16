"use client";

import { useEffect, useRef, useState } from "react";
import { AddToFolderModal } from "./Modal";
import styles from "./LinkAddInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function LinkAddInput() {
  const [isModal, setIsModal] = useState(false);
  const handleOpenMoldalAddToFolder = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const [isLinkAreaVisible, setIsLinkAreaVisible] = useState<boolean>(true);
  const linkAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLinkAreaVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // LinkArea가 화면의 50% 이상 보일 때 감지
      }
    );

    if (linkAreaRef.current) {
      observer.observe(linkAreaRef.current);
    }

    return () => {
      if (linkAreaRef.current) {
        observer.unobserve(linkAreaRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={cx("ref-position")} ref={linkAreaRef}></div>
      <div
        className={cx("header-content", { "fixed-bottom": isLinkAreaVisible })}
      >
        <label className={cx("link-search-box")}>
          <img src="images/link.png" className="link-img" alt="링크추가하기" />
          <input
            className={cx("link-search-input")}
            placeholder="링크를 추가해 보세요"
          ></input>
          <img
            onClick={handleOpenMoldalAddToFolder}
            src="images/추가하기버튼.png"
            className={cx("link-button-img")}
            alt="링크추가 버튼"
          />
        </label>
      </div>
      {isModal && <AddToFolderModal closeModal={closeModal} />}
    </>
  );
}
