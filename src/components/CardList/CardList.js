import setPassedTime from "../../utils/setPassedTime";
import styles from "./CardList.module.css";
import EditButtonsArea from "../EditButtonsArea/EditButtonsArea";
import Kebab from "../Kebab/Kebab";
import { useFolderNameContext } from "../../context/FolderNameContext";
import EmptyArea from "../EmptyArea/EmptyArea";
import { useRouter } from "next/router";

const CardList = ({ cardList, inputText }) => {
  function createDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  }

  const location = useRouter();

  const { folderName } = useFolderNameContext();

  const cards = cardList
    .filter((item) => {
      if (!inputText) {
        return item;
      } else if (
        item.url?.toLowerCase().includes(inputText) ||
        item.title?.toLowerCase().includes(inputText) ||
        item.description?.toLowerCase().includes(inputText)
      ) {
        return item;
      }
    })
    .map((item) => {
      return (
        <div
          className={styles.card}
          onClick={() => {
            window.open(item.url);
          }}
        >
          {item.image_source ? (
            <img
              className={styles.cardImg}
              src={item.image_source}
              alt="카드 이미지"
            ></img>
          ) : (
            <img
              className={styles.cardImg}
              src={`/assets/default_img.png`}
              alt="카드 이미지"
            ></img>
          )}

          <img
            className={styles.starButton}
            src={`/assets/star.png`}
            alt="별 버튼"
          />
          <Kebab link={item.url} />

          <div className={styles.cardBottom}>
            <div>
              <p className={styles.time}>{setPassedTime(item.created_at)}</p>
              <p className={styles.cardText}>{item.description}</p>
              <p className={styles.createdDate}>
                {createDate(item.created_at)}
              </p>
            </div>
          </div>
        </div>
      );
    });

  switch (location.pathname) {
    case "/shared":
      return (
        <div className={styles.cardList}>
          {cardList.map((item) => (
            <div className={styles.card} onClick={() => window.open(item.url)}>
              <img
                className={styles.cardImg}
                src={item.imageSource}
                alt="카드 이미지"
              ></img>
              <div className={styles.cardBottom}>
                <div>
                  <p className={styles.time}>{setPassedTime(item.createdAt)}</p>
                  <p className={styles.cardText}>{item.description}</p>
                  <p className={styles.createdDate}>
                    {createDate(item.createdAt)}
                  </p>
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
            <div className={styles.topArea}>
              <h1 className={styles.cardListTitle}>{folderName}</h1>
              <EditButtonsArea />
            </div>
            <EmptyArea></EmptyArea>
          </div>
        );
      } else {
        return (
          <div>
            <div className={styles.topArea}>
              <h1 className={styles.cardListTitle}>{folderName}</h1>
              <EditButtonsArea />
            </div>

            <div className={styles.cardList}>{cards}</div>
          </div>
        );
      }

    default:
      return null;
  }
};

export default CardList;
