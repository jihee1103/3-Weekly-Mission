import React from 'react';
import UserWrapper from "./UserWrapper";

const Top = () => {
  return (
      <div className="top">
        <div className="top-box">
          <UserWrapper/>
          <p className="top-title">⭐️ 즐겨찾기</p>
        </div>
      </div>
  );
}

export default Top;