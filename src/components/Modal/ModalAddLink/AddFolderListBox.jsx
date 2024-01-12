import React from "react";
import styled from "styled-components";

export default function AddFolderListBox({ name, count }) {
  return (
    <>
      <Box>
        <Name>{name}</Name> <Count>{count}개 링크</Count>
      </Box>
    </>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 264px;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const Name = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #373740;
`;

const Count = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #9fa6b2;
`;
