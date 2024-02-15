import styled from "styled-components";
import linkIcon from "./link.svg";
import { useModal } from "../../hook/useModal";

const AddLinkBar = () => {
  const { openModal } = useModal();

  return (
    <AddLinkInputWrapper>
      <div>
        <AddLinkInput type="text" placeholder="링크를 추가해 보세요." />
        <button onClick={() => openModal("addLink")}>추가하기</button>
      </div>
    </AddLinkInputWrapper>
  );
};
export default AddLinkBar;

const AddLinkInput = styled.input`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 37px;
  padding: 16px 40px;
  padding-left: 50px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff) url(${linkIcon}) no-repeat left 20px
    center;
`;

const AddLinkInputWrapper = styled.div`
  margin-top: 60px;
  padding-bottom: 90px;

  div {
    display: flex;
    width: 800px;
    position: relative;
    margin: 0 auto;
  }

  button {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 80px;
    height: 37px;
    border: none;
    background-color: var(--Linkbrary-primary-color, #6d6afe);
    color: white;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
