import "./Section.css";
import Search from "./Search/Search";
import Card from "./Card/Card.js";
import { useEffect, useState } from "react";
import getTimeDifference from "./TimeDiffChecker/TImeDiffChecker.js";

function Section() {
  let today = new Date();
  function todayIs() {
    return today.toLocaleDateString();
  }
  let [cardInfo, setCardInfo] = useState();
  const style = {};
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        if (!response.ok) {
          throw new Error("데이터를 불러올 수 없습니다.");
        }
        const data = await response.json();
        setCardInfo(data["folder"]["links"]);
      } catch (error) {
        console.log(error); //후에 에러 처리를 위한 코드 넣기
      }
    };

    fetchData();
  }, []);

  if (!cardInfo) {
    return null;
  }
  const timeDiffs = [];
  const dateCalculator = async () => {
    for (let i = 0; i < 9; i++) {
      let linkedDay = new Date(cardInfo[i].createdAt);
      let timeDiff = today - linkedDay;
      timeDiffs.push(Math.floor(timeDiff / 1000));
    }
    await Promise.allSettled(timeDiffs);
  };

  dateCalculator();

  return (
    <section>
      <div>
        <Search />
      </div>
      <div className="card-box">
        {cardInfo
          .filter((card, index) => index < 9)
          .map((card, index) => (
            <a key={index} rel="noreferrer" href={card.url} target="_blank">
              <Card image={card.imageSource} createdAt={getTimeDifference(timeDiffs[index])} description={card.description} uploadDate={todayIs()} />
            </a>
          ))}
      </div>
    </section>
  );
}

export default Section;
