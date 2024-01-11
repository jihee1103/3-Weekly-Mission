import React from "react";
import styled from "./NoLinkBlock.module.css";

export default function NoLinkBlock() {
  return (
    <div className={styled.noLink}>
      <span>저장된 링크가 없습니다.</span>
    </div>
  );
}
