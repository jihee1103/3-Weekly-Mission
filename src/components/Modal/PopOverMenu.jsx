import styled from 'styled-components';

export default function PopOverMenu({
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
  linkUrl,
}) {
  const handleClickButton = (e) => {
    toggleModal();
    updateModalName(e.currentTarget.id);
    handleClickDeleteLink(linkUrl);
  };
  return (
    <MenuWrapper>
      <MenuButton id="deleteLink" onClick={handleClickButton}>
        삭제하기
      </MenuButton>
      <MenuButton id="addLinkButton" onClick={handleClickButton}>
        폴더에 추가
      </MenuButton>
    </MenuWrapper>
  );
}
const MenuWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  gap: 2px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 2;
`;
const MenuButton = styled.div`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #333236;
  align-self: stretch;
  &:hover {
    color: #6d6afe;
    background-color: #e7effb;
  }
`;
