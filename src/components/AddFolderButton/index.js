import styled from "styled-components";
import add from "./add.svg";

const AddFolderButton = () => {
  return (
    <AddfolderButtonStyle>
      <img src={add} alt="폴더 추가 버튼" />
    </AddfolderButtonStyle>
  );
};
export default AddFolderButton;

const AddfolderButtonStyle = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
