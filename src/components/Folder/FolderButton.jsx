import styled from "styled-components";

function FolderButton({ name, onClick, isSelected }) {
  return (
    <>
      <FolderItem onClick={onClick} isSelected={isSelected}>
        {name}
      </FolderItem>
    </>
  );
}

const COLORS = {
  primary: "--linkbrary-primary-color",
  white: "--linkbrary-white",
  black: "--text-color-light-mode",
};

const FolderItem = styled.span`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color);
  background: var(
    ${({ isSelected }) => (isSelected ? COLORS["primary"] : COLORS["white"])}
  );

  color: var(
    ${({ isSelected }) => (isSelected ? COLORS["white"] : COLORS["black"])}
  );
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default FolderButton;
