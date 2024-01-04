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
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
      const data = await response.json();
      setCardInfo(data["folder"]["links"]);
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
              <Card
                style={card.imageSource !== undefined ? style : logoStyle}
                image={card.imageSource}
                createdAt={getTimeDifference(timeDiffs[index])}
                description={card.description}
                uploadDate={todayIs()}
              />
            </a>
          ))}
      </div>
    </section>
  );
}

export default Section;
