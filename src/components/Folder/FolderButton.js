import styled from "styled-components";

const FolderItem = styled.span`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;

  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SelectedFolderItem = styled(FolderItem)`
  background: var(--Linkbrary-primary-color, #6d6afe);
  color: #fff;
`;

function FolderButton({ item, onClick, isSelected }) {
  // console.log("isSelected", isSelected);
  return (
    <>
      {isSelected ? (
        <SelectedFolderItem onClick={onClick}>{item.name}</SelectedFolderItem>
      ) : (
        <FolderItem onClick={onClick}>{item.name}</FolderItem>
      )}
    </>
  );
}

export default FolderButton;
