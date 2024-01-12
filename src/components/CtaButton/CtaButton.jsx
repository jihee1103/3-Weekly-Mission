import React from "react";
import styled from "styled-components";

export default function CtaButton({ CTAButtonStyle = CTAButton, children }) {
  return (
    <CTAButtonStyle>
      <ButtonText>{children}</ButtonText>
    </CTAButtonStyle>
  );
}

export const CTAButton = styled.button`
  text-align: center;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

const ButtonText = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  width: 49px;
`;
