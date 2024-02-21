"use client";
import Image from "next/image";
import closeIcon from "../_close.svg";
import { useModal } from "../../../hook/useModal";

const CloseModalButton = () => {
  const { closeModal } = useModal();
  return (
    <Image
      src={closeIcon}
      width={24}
      height={24}
      style={{
        position: "absolute",
        cursor: "pointer",
        top: "15px",
        right: "15px",
      }}
      alt="닫기 버튼"
      onClick={closeModal}
    />
  );
};

export default CloseModalButton;
