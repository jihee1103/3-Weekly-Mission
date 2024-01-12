import React from "react";
import styled from "styled-components";
import imageData from "../../utils/imageData";
import {
  ModalShareFolderTitle,
  ModalShareTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalShare({ folderName = "폴더명" }) {
  return (
    <ModalWrapper>
      <ModalShareTitleContainer>
        <ModalTitle>폴더 공유</ModalTitle>
        <ModalShareFolderTitle>{folderName}</ModalShareFolderTitle>
      </ModalShareTitleContainer>
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

const ModalShareLinkIcon = ({ type, imageSource, altContent }) => {
  const TYPE = {
    kakao: "#FEE500",
    facebook: "#1877F2",
    link: "rgba(157, 157, 157, 0.04)",
  };

  const LinkIconBackground = styled.img`
    position: relative;
    background-color: ${TYPE[type]};
    border-radius: 37.333px;
    padding: 12px;
  `;

  return <LinkIconBackground src={imageSource} alt={altContent} />;
};

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
