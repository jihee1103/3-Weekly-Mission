import { useEffect, useState } from "react";
import { getUserFolder } from "../api";
import { getTimeDifference, formatCreatedAt } from "./DateUtils";
import "./Section.css";

export default Section;

function Section() {
  return (
    <section>
      <input></input>
      <div className="foder-contents">
        <FoderContentCard />
      </div>
    </section>
  );
}

function FoderContentCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function handleload() {
      const body = await getUserFolder();
      const linksArray = body.folder.links;
      setItems(linksArray);
    }
    handleload();
  }, []);

  return (
    <ul>
      {items.map((item) => {
        const timeAgo = getTimeDifference(item.createdAt);
        const createdAt = formatCreatedAt(item.createdAt);
        return (
          <li
            onClick={() =>
              openNewWindow(
                "https://app.gather.town/app/kV7DdQiqGBlwli28/codeit"
              )
            }
            key={item.id}
          >
            <div className="card-img-div">
              <img
                className="card-img"
                src={item.imageSource}
                alt="카드사진"
              ></img>
            </div>
            <div className="card-contents">
              <p className="card-time-ago">{timeAgo}</p>
              <p className="card-description">{item.description}</p>
              <p className="card-createdat">{createdAt}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function openNewWindow(url) {
  window.open(url, "_blank");
}
