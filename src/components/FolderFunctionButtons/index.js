import shareIcon from "./share.svg";
import penIcon from "./pen.svg";
import deleteIcon from "./delete.svg";
import styled from "styled-components";

const FolderFunctionButtons = () => {
  return (
    <FolderFunctionButtonWrapper>
      <FolderFunctionButton>
        <img src={shareIcon} alt="공유하기 버튼" />
        공유
      </FolderFunctionButton>
      <FolderFunctionButton>
        <img src={penIcon} alt="수정하기 버튼" />
        이름변경
      </FolderFunctionButton>
      <FolderFunctionButton>
        <img src={deleteIcon} alt="삭제하기 버튼" />
        삭제
      </FolderFunctionButton>
    </FolderFunctionButtonWrapper>
  );
};
export default FolderFunctionButtons;

const FolderFunctionButtonWrapper = styled.div`
  display: flex;
`;

const FolderFunctionButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
`;
