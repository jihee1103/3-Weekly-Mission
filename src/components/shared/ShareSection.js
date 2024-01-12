import { useEffect, useState } from "react";
import { getUserFolder } from "../../api";
import { getTimeDifference, formatCreatedAt } from "../common/DateUtils";
import "./ShareSection.css";

export default function Section() {
  return (
    <section>
      <input className="foder-search-input"></input>
      <div className="foder-contents">
        <FoderContentCard />
      </div>
    </section>
  );
}

function FoderContentCard() {
  const [items, setItems] = useState([]);
  const openNewWindow = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    async function handleload() {
      const body = await getUserFolder();
      const linksArray = body.folder.links;
      setItems(linksArray);
    }
    handleload();
  }, []);

  return (
    <ul className="cards">
      {items.map(({ createdAt, url, id, description, imageSource }) => {
        const timeAgo = getTimeDifference(createdAt);
        const formatAt = formatCreatedAt(createdAt);
        const openLink = () => openNewWindow(url);
        return (
          <li className="card" onClick={openLink} key={id}>
            <div className="card-img-div">
              <img
                className="card-img"
                src={
                  imageSource || "/imgs/01_모코코콘1_16_백색모코코_물음표.png"
                }
                alt="카드사진"
              ></img>
            </div>
            <div className="card-contents">
              <p className="card-time-ago">{timeAgo}</p>
              <p className="card-description">{description}</p>
              <p className="card-createdat">{formatAt}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
