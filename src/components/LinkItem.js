import { calculateTimeDifference, formatDate } from "../utils/dateFormatter";
import Card from "./Card";
import styles from "./LinkItem.module.css";

const DEFAULT_IMAGE =
  "https://i.namu.wiki/i/1KSjLQJ6kGnGlCaxPjhO1EzAiwCaIOSCkZsK6qd3T_bJARHiqd1XsHtZT3bKvEP_zjn6uZklJ6MsNT67pYSr4V3sQ_HRXSvTVvOu7T1ZBltd-nk7SU9RgFtIx0Yr9yOcZ4EgxCnYdoBs3oqnLALpCA.webp";

function LinkItem({ linkInfo }) {
  return (
    <Card className={styles.linkItem}>
      <a className={styles.thumb} href="/folder/1" target="_blank">
        <img src={linkInfo.imageSource || DEFAULT_IMAGE} alt="썸네일" />
      </a>
      <div className={styles.content}>
        <p className={styles.timeDifference}>
          {calculateTimeDifference(linkInfo.createdAt)}
        </p>
        <p className={styles.description}>{linkInfo.description}</p>
        <p className={styles.createdAt}>{formatDate(linkInfo.createdAt)}</p>
      </div>
    </Card>
  );
}

export default LinkItem;
