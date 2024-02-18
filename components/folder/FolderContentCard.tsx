import classNames from "classnames/bind";
import { FolderContentCardProps } from "../../types/types";
import Card from "./Card";
import styles from "./FolderContentCard.module.scss";

const cx = classNames.bind(styles);

export default function FolderContentCard({ items }: FolderContentCardProps) {
  return (
    <>
      <ul className={cx("card-box")}>
        {items && items.length > 0 ? (
          items?.map((item) => {
            return <Card item={item} key={item.id} />;
          })
        ) : (
          <div className={cx("no-save-link")}>
            저장된 링크가 없습니다
            <img src="/images/03_땡깡-1.gif" alt="폴더에 링크를 추가해주세요" />
          </div>
        )}
      </ul>
    </>
  );
}
