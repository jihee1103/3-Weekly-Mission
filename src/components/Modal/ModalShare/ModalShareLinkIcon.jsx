import React from "react";
import styled from "styled-components";

export default function ModalShareLinkIcon({ type, imageSource, altContent }) {
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
}
