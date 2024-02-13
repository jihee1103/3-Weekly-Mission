import styled from "styled-components";
import linkIcon from "./link.svg";

const AddLinkBar = () => {
  return (
    <AddLinkInputWrapper>
      <AddLinkInput type="text" placeholder="링크를 추가해 보세요." />
    </AddLinkInputWrapper>
  );
};
export default AddLinkBar;

const AddLinkInput = styled.input`
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
`;
