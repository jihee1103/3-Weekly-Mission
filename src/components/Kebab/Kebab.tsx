import React, { useState } from "react";
import imageData from "../../assets/imageData";
import styled from "styled-components";
import { ModalButtonClickType } from "../../types/types";

interface Props {
  handleModalButtonClick: ModalButtonClickType | null;
  url: string;
}

export default function Kebab({ handleModalButtonClick, url }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };

  const handleKebabClick = () => {
    toggleClicked();
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!handleModalButtonClick) {
      return;
    }
    const { currentTarget } = event;
    const temp = {
      currentTarget,
      url,
    } as React.MouseEvent<HTMLButtonElement> & { url: string };
    handleModalButtonClick(temp);
  };

  return (
    <ContainerBtn type="button" onClick={handleKebabClick}>
      <KebabIcon src={imageData.kebabIcon} alt="케밥모양 아이콘" />
      {isClicked && (
        <ToggleContainer>
          <Button type="button" id="deleteLink" onClick={handleButtonClick}>
            삭제하기
          </Button>
          <Button type="button" id="addLink" onClick={handleButtonClick}>
            폴더에 추가
          </Button>
        </ToggleContainer>
      )}
    </ContainerBtn>
  );
}

const ContainerBtn = styled.button`
  position: absolute;
  right: 20px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;

const KebabIcon = styled.img``;
const ToggleContainer = styled.div`
  z-index: 7;
  position: absolute;
  right: -2rem;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

const Button = styled.button`
  width: 100px;
  padding: 7px 12px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 14px;
  font-weight: 400;
`;
