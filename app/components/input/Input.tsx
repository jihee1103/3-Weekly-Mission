'use client';

import styled from 'styled-components';
import eyeOnImg from '/public/eye-on.svg';
import eyeOffImg from '/public/eye-off.svg';
import { useState } from 'react';

export default function Input({ type }: { type: string }) {
  const [imgUrl, setImgUrl] = useState(eyeOffImg.src);
  const [inputType, setInputType] = useState(type);

  const toggleIcon = () => {
    if (imgUrl === eyeOffImg.src) {
      setImgUrl(eyeOnImg.src);
      setInputType('text');
    } else {
      setImgUrl(eyeOffImg.src);
      setInputType('password');
    }
  };

  return (
    <Wrapper>
      <StyledInput placeholder="내용입력" type={inputType} />
      {type === 'password' ? (
        <Icon $imgUrl={imgUrl} onClick={toggleIcon} />
      ) : null}
    </Wrapper>
  );
}

interface StyledInputProps {
  $imgUrl: string;
}

const Icon = styled.button<StyledInputProps>`
  background-image: ${(props) => `url(${props.$imgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 15px;
  cursor: pointer;
  padding: 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  position: relative;
`;
const StyledInput = styled.input`
  display: flex;
  width: 100%;
  padding: 18px 31px 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  outline: none;

  &::placeholder {
    color: var(--Linkbrary-gray60, #9fa6b2);
    line-height: 24px;
  }

  &:focus {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  }
`;
