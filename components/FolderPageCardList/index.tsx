"use client";

import { useContext, useState } from "react";
import FolderPageStateContext from "../../context/FolderPageStateContext";
import Image from "next/image";
import defaultImage from "./default.png";
import starIcon from "./star.svg";
import kebabIcon from "./kebab.svg";
import KebabPopOver from "../KebabPopOver";
import styles from "./index.module.css";

const FolderPageCardList = () => {
  const [openedKebabId, setOpenedKebabId] = useState<number | null>(null);
  const context = useContext(FolderPageStateContext);
  if (!context) {
    return null;
  }
  const { allFolderData } = context;

  const handleKebabClick = (id: number) => {
    setOpenedKebabId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      {allFolderData.map((folder) => (
        <div
          key={folder.id.toString()}
          id={folder.id.toString()}
          className={styles.container}
        >
          <div className={styles.wrapper}>
            <Image
              src={starIcon}
              width={34}
              height={34}
              alt="즐겨찾기 버튼"
              className={styles.starIcon}
            />
            <div className={styles.imageWrapper}>
              {folder.image_source ? (
                <Image
                  src={folder.image_source}
                  width={340}
                  height={200}
                  alt="링크 대표 이미지"
                  className={styles.image}
                />
              ) : (
                <Image
                  src={defaultImage}
                  width={340}
                  height={200}
                  alt="링크 기본 이미지"
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.content}>
              <Image
                src={kebabIcon}
                alt="더보기 버튼"
                width={21}
                height={17}
                onClick={() => handleKebabClick(folder.id)}
                className={styles.image}
              />
              {openedKebabId === folder.id && <KebabPopOver />}
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
export default FolderPageCardList;
