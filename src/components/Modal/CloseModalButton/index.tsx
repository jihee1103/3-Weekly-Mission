import styled from "styled-components";
import closeIcon from "../_close.svg";
import { useModal } from "../../../hook/useModal";

const CloseModalButton = () => {
  const { closeModal } = useModal();
  return <CloseButton src={closeIcon} alt="닫기 버튼" onClick={closeModal} />;
};

export default CloseModalButton;

const CloseButton = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
