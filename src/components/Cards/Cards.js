import { useEffect } from "react";
import search from "../../assets/images/Search.svg";

const Cards = ({ folderData }) => {
    return (
        <div className="cards">
            <div className="cards-container">
                <div className="cards__search-bar">
                    <img src={search} alt="돋보기 모양 사진" />
                    <input placeholder="링크를 검색해 보세요."></input>
                </div>
                <div className="cards__content"></div>
            </div>
            <ul className="card-list">
                {Array.isArray(folderData.links)
                    ? folderData.links.map((card) => {
                          return (
                              <li className="card" key={card.id}>
                                  <div className="card__img">
                                      <img src={card.imageSource} alt="카드 이미지" />
                                  </div>
                                  <div className="card__content">
                                      <div className="card__content--time-passed">10 minutes ago</div>
                                      <div className="card__content--description">{card.description}</div>
                                      <div className="card__content--createdAt">2023. 3. 15</div>
                                  </div>
                              </li>
                          );
                      })
                    : null}
            </ul>
        </div>
    );
};

export default Cards;
