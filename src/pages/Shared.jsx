import React, { useEffect, useState } from "react";
import "../styles/Shared.css";
import codeitLogo from "../assets/images/shared-white.svg";
import CardList from "../Components/CardList";
import { getShredCardList } from "../apis/api";

export default function Shared({ user }) {
  const [cardList, setCardList] = useState([]);

  const handleGetCardList = async () => {
    try {
      const result = await getShredCardList();
      setCardList(result);
      console.log(cardList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      {user ? <SharedHeader user={user} /> : ""}

      <div>
        <form className="shared-search-form">
          <input name="search" />
        </form>
        <CardList cardList={cardList} />
      </div>
    </div>
  );
}

function SharedHeader({ user }) {
  const userName = user ? user.name : null;
  const source = user ? user.profileImageSource : null;
  return (
    <div className="shared-header">
      {source ? (
        <img className="user-profile-img" src={source} alt="유저이미지" />
      ) : (
        <div className="codeit-img-background">
          <img src={codeitLogo} alt="코드잇 로고 이미지" />
        </div>
      )}

      <span>{userName}</span>
      <h2>⭐ 즐겨찾기</h2>
    </div>
  );
}
