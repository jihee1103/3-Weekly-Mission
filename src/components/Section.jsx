import { useState, useEffect } from "react";
import { UserFolder } from "../api.js";
import { DateDiff, showCreatedAt } from "./utils.jsx";
import "./Section.css";
import wrong from "../images/wrong-link.png";

function SectionCard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function cardData() {
      const body = await UserFolder();
      const linkData = body.folder.links;
      setCards(linkData);
    }
    cardData();
  }, []);

  return (
    <ul>
      {cards.map(({ createdAt, link, id, description, img }) => {
        const currentToDate = DateDiff(createdAt);
        const showcreatedDate = showCreatedAt(createdAt);
        const openLink = () => openNewTab(link);

        return (
          <li onClick={openLink} key={id}>
            <div className="card-box">
              <img
                className="card-box-image"
                src={img || wrong}
                alt="없을 때 사진"
              ></img>
            </div>
            <div className="card-box-contents">
              <p className="current-to-created">{currentToDate}</p>
              <p className="descriptions">{description}</p>
              <p className="show-date">{showcreatedDate}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

const openNewTab = (link) => {
  window.open(link, "_blank");
};

function Section() {
  return (
    <section>
      <input></input>
      <div className="contents">
        <SectionCard />
      </div>
    </section>
  );
}

export default Section;
