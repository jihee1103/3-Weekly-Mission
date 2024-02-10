import { MouseEvent } from 'react';
import styled from 'styled-components';

interface Props {
  toggleModal: () => void;
  updateModalName: (id: string) => void;
  handleClickDeleteLink: (linkUrl: string) => void;
  linkUrl: string;
}

export default function PopOverMenu({
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
  linkUrl,
}: Props) {
  const handleClickButton = (e: MouseEvent<HTMLDivElement>) => {
    toggleModal();
    updateModalName(e.currentTarget.id);
    handleClickDeleteLink(linkUrl);
  };
  return (
    <Wrapper>
      <Button id="deleteLink" onClick={handleClickButton}>
        삭제하기
      </Button>
      <Button id="addLinkButton" onClick={handleClickButton}>
        폴더에 추가
      </Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
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
  z-index: 3;
`;
const Button = styled.div`
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
