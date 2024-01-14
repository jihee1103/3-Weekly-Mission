import { calElapsedTime } from "../../../utils/calElapsedTime";
import { calDate } from "../../../utils/calDate";
import styles from "./Card.module.css";
import PopOver from "../../PopOver/PopOver";
import { useState } from "react";

function Card({ link, folderData }) {
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    //케밥 클릭시 팝오버
    setPop(!pop);
    console.log("pop: ", pop);
  };

  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImgWrap} onClick={() => window.open(link.url)}>
        {link.image_source ? (
          <img className={styles.cardImg} src={link.image_source} alt="img" />
        ) : (
          <img className={styles.cardImg} src="/assets/no-img.svg" alt="img" />
        )}
      </div>

      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <span className={styles.elapsedTime}>
            {calElapsedTime(link.created_at)}
          </span>
          <span className={styles.kebab}>
            <img
              className={styles.kebabImg}
              src="/assets/kebab-icon.svg"
              alt="kebab"
              onClick={() => {
                handleClick();
              }}
            />
            {pop && <PopOver folderData={folderData} />}
          </span>
        </div>
        <div className={styles.contentText}>{link.title}</div>
        <div className={styles.createdDate}>{calDate(link.created_at)}</div>
      </div>
    </div>
  );
}

export default Card;
