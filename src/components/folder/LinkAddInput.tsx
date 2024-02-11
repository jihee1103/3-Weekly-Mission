import styled from "styled-components";
import useModals from "../../hooks/useModals";
import Modals from "./Modals";
import { useEffect, useRef, useState } from "react";
export default function LinkAddInput() {
  const { openModal, closeModal, modal } = useModals();
  const handleOpenMoldalAddToFolder = () => {
    openModal({ type: "addToFolder", props: null });
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
      <RefPosition ref={linkAreaRef} />
      <HeaderContent className={`${isLinkAreaVisible ? "fixed-bottom" : ""}`}>
        <label className="link-search-box">
          <img src="/imgs/link.png" className="link-img" alt="링크추가하기" />
          <input
            className="link-search-input"
            placeholder="링크를 추가해 보세요"
          ></input>
          <img
            onClick={handleOpenMoldalAddToFolder}
            src="/imgs/추가하기버튼.png"
            className="link-button-img"
            alt="링크추가 버튼"
          />
        </label>
      </HeaderContent>
      <Modals modal={modal} closeModal={closeModal} />
    </>
  );
}

const RefPosition = styled.div`
  position: absolute;
  z-index: -1;
  height: 200px;
`;

const HeaderContent = styled.div`
  display: flex;
  margin: 153px auto 90px;
  max-width: 865px;
  width: 100%;
  padding: 0 32.5px;

  &.fixed-bottom {
    position: fixed;
    bottom: 0;
    z-index: 1;
  }

  .link-search-box {
    width: 100%;
    display: flex;
    padding: 16px 20px;
    align-items: center;
    border-radius: 15px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
    justify-content: space-between;
  }

  .link-search-input {
    outline: none;
    width: 100%;
    border: none;
  }
  .link-button-img {
    cursor: pointer;
  }
`;
