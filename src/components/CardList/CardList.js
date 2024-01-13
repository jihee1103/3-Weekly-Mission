import setPassedTime from "../../utils/setPassedTime";
import "./CardList.css";
import { useLocation } from "react-router";
import EditButtonsArea from "../EditButtonsArea/EditButtonsArea";
import Kebab from "../Kebab/Kebab";
import { useFolderNameContext } from "../../context/FolderNameContext";
import EmptyArea from "../EmptyArea/EmptyArea";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const CardList = ({ cardList }) => {
  function createDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  }

  const location = useLocation();

  const { folderName } = useFolderNameContext();

  switch (location.pathname) {
    case "/shared":
      return (
        <div className="cardList">
          {cardList.map((item) => (
            <div className="card" onClick={() => window.open(item.url)}>
              <img
                className="cardImg"
                src={item.imageSource}
                alt="카드 이미지"
              ></img>
              <div className="cardBottom">
                <div>
                  <p className="time">{setPassedTime(item.createdAt)}</p>
                  <p className="cardText">{item.description}</p>
                  <p className="createdDate">{createDate(item.createdAt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "/folder":
      if (cardList.length === 0) {
        return (
          <div>
            <div className="topArea">
              <h1 className="cardListTitle">{folderName}</h1>
              <EditButtonsArea />
            </div>
            <EmptyArea></EmptyArea>
          </div>
        );
      } else {
        return (
          <div>
            <div className="topArea">
              <h1 className="cardListTitle">{folderName}</h1>
              <EditButtonsArea />
            </div>

            <div className="cardList">
              {cardList.map((item) => (
                <div
                  className="card"
                  onClick={() => {
                    window.open(item.url);
                  }}
                >
                  <img
                    className="cardImg"
                    src={item.image_source}
                    alt="카드 이미지"
                  ></img>
                  <img
                    className="starButton"
                    src={process.env.PUBLIC_URL + `/assets/star.png`}
                    alt="별 버튼"
                  />
                  <Kebab link={item.url} />

                  <div className="cardBottom">
                    <div>
                      <p className="time">{setPassedTime(item.created_at)}</p>
                      <p className="cardText">{item.description}</p>
                      <p className="createdDate">
                        {createDate(item.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

    default:
      return null;
  }
};

export default CardList;
