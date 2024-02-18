"use client";

import { useContext } from "react";
import { SharedPageStateContext } from "../../app/shared/page";
import Image from "next/image";
import defaultImage from "./default.png";
import styles from "./index.module.css";

const SharedPageCardList = () => {
  const context = useContext(SharedPageStateContext);
  if (!context || !context.folderData || !context.folderData.links) {
    return null;
  }
  const { folderData } = context;

  return (
    <>
      {folderData &&
        folderData.links &&
        folderData.links.map((folder) => (
          <div key={folder.id} className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.imageWrapper}>
                {folder.imageSource ? (
                  <Image
                    src={folder.imageSource}
                    width={340}
                    height={200}
                    alt="링크 대표 이미지"
                    className={styles.img}
                  />
                ) : (
                  <Image
                    src={defaultImage}
                    width={340}
                    height={200}
                    alt="링크 기본 이미지"
                    className={styles.img}
                  />
                )}
              </div>
              <div className={styles.content}>
                <span>10 minutes ago</span>
                <p>{folder.description}</p>
                <span>2023. 3. 15</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default SharedPageCardList;
