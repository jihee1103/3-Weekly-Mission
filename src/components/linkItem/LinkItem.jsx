import { calculateTimeDifference, formatDate } from "../../utils/dateFormatter";
import Card from "../card/Card";
import styles from "./LinkItem.module.css";
import LinkMenu from "./linkMenu/LinkMenu";

const DEFAULT_IMAGE =
  "https://i.namu.wiki/i/8AS4OSvzlQ_Tw8Jvy4g7gQb0w0JTQRf4lhvsqUYUqOcTTmeMFVBHCL72kO6PR2NDilN2i2wuZidniZgvLs0w3o8r8Xt8RgOgh-L7x1HoPju69RSHFg9LAOuyScKgcTasezzJm8g9JYUp-Vy5WHpI_Q.webp";

function LinkItem({ linkInfo, onModalClick, isShared = false }) {
  return (
    <Card className={styles.linkItem}>
      <div className={styles.thumb}>
        <a href="/folder/1" target="_blank">
          <img src={linkInfo["image_source"] || DEFAULT_IMAGE} alt="썸네일" />
        </a>
        {isShared || <AddFavoriteButton />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.timeDifference}>
            {calculateTimeDifference(linkInfo["created_at"])}
          </p>
          <LinkMenu onModalClick={onModalClick} />
        </div>
        <p className={styles.description}>{linkInfo.description}</p>
        <p className={styles.createdAt}>{formatDate(linkInfo["created_at"])}</p>
      </div>
    </Card>
  );
}

function AddFavoriteButton() {
  return (
    <button
      className={styles.favorite}
      style={{
        padding: "0",
        borderStyle: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_49879)">
          <path
            d="M16.9094 2.37585C16.9453 2.29893 17.0547 2.29893 17.0906 2.37585L21.1136 10.9916C21.269 11.3244 21.5802 11.5577 21.9433 11.6135L30.9917 13.0032C31.0719 13.0155 31.1048 13.1134 31.0482 13.1717L24.4597 19.9597C24.2174 20.2093 24.1075 20.5588 24.1632 20.9021L25.7128 30.4513C25.7261 30.5338 25.6385 30.5953 25.5655 30.5547L17.5343 26.092C17.202 25.9073 16.798 25.9073 16.4657 26.092L8.43452 30.5547C8.3615 30.5953 8.27386 30.5338 8.28724 30.4513L9.8368 20.9021C9.89251 20.5587 9.78257 20.2093 9.54033 19.9597L2.95177 13.1717C2.89519 13.1134 2.92805 13.0155 3.00835 13.0032L12.0567 11.6135C12.4198 11.5577 12.731 11.3244 12.8864 10.9916L16.9094 2.37585Z"
            fill="black"
            fill-opacity="0.2"
            stroke="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_49879">
            <rect width="34" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default LinkItem;
