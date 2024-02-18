"use client";

import { useEffect, useState } from "react";
import { SampleFolderLink, getUserFolder } from "../../api/api";
import { getTimeDifference, formatCreatedAt } from "../../utils/Utils";
import styles from "./ShareSection.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Section() {
  return (
    <section className={cx("section")}>
      <input className={cx("foder-search-input")}></input>
      <div className={cx("foder-contents")}>
        <FoderContentCard />
      </div>
    </section>
  );
}

function FoderContentCard() {
  const [items, setItems] = useState<SampleFolderLink[] | null>(null);
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
    <ul className={cx("cards")}>
      {items && items.length > 0 ? (
        items.map(({ createdAt, url, id, description, imageSource }) => {
          const timeAgo = getTimeDifference(createdAt);
          const formatAt = formatCreatedAt(createdAt);
          const openLink = () => openNewWindow(url);
          return (
            <li className={cx("card")} onClick={openLink} key={id}>
              <div className={cx("card-img-div")}>
                <img
                  className={cx("card-img")}
                  src={
                    imageSource || "/imgs/01_모코코콘1_16_백색모코코_물음표.png"
                  }
                  alt="카드사진"
                ></img>
              </div>
              <div className={cx("card-contents")}>
                <p className={cx("card-time-ago")}>{timeAgo}</p>
                <p className={cx("card-description")}>{description}</p>
                <p className={cx("card-createdat")}>{formatAt}</p>
              </div>
            </li>
          );
        })
      ) : (
        <div className={cx("no-save-link")}>
          저장된 링크가 없습니다
          <img src="/images/03_땡깡-1.gif" alt="폴더에 링크를 추가해주세요" />
        </div>
      )}
    </ul>
  );
}
