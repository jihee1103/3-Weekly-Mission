import React from "react";
import styled from "styled-components";
import imageData from "../../../utils/imageData";
import {
  ModalFolderTitle,
  ModalTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "../Modal.styled";
import ModalShareLinkIcon from "./ModalShareLinkIcon";

export default function ModalShare({ folderName = "폴더명" }) {
  return (
    <ModalWrapper>
      <ModalTitleContainer>
        <ModalTitle>폴더 공유</ModalTitle>
        <ModalFolderTitle>{folderName}</ModalFolderTitle>
      </ModalTitleContainer>
      <ModalShareLinkContainer>
        <ModalShareLinkBox>
          <ModalShareLinkIcon
            type={"kakao"}
            imageSource={imageData.kakaoIcon}
            altContent={"카카오이미지"}
          />
          카카오톡
        </ModalShareLinkBox>
        <ModalShareLinkBox>
          <ModalShareLinkIcon
            type={"facebook"}
            imageSource={imageData.modalFacebookIcon}
            altContent={"페이스북이미지"}
          />
          페이스북
        </ModalShareLinkBox>
        <ModalShareLinkBox>
          <ModalShareLinkIcon
            type={"link"}
            imageSource={imageData.modalShareIcon}
            altContent={"링크 복사"}
          />
          링크복사
        </ModalShareLinkBox>
      </ModalShareLinkContainer>
    </ModalWrapper>
  );
}

const ModalShareLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ModalShareLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 32px;
`;
