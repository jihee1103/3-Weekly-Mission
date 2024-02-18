import Image from "next/image";
import kakaotalkIcon from "./kakaotalk.svg";
import facebookIcon from "./facebook.svg";
import linkIcon from "./link.svg";
import CloseModalButton from "../CloseModalButton";
import styles from "../index.module.css";

const ShareFolder = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <CloseModalButton />
        <h1>폴더 공유</h1>
        <span>폴더명</span>
        <div className={styles.sharedContentWrapper}>
          <div>
            <Image
              src={kakaotalkIcon}
              width={42}
              height={42}
              alt="카카오톡 공유 버튼"
            />
            <span>카카오톡</span>
          </div>
          <div>
            <Image
              src={facebookIcon}
              width={42}
              height={42}
              alt="페이스북 공유 버튼"
            />
            <span>페이스북</span>
          </div>
          <div>
            <Image src={linkIcon} width={42} height={42} alt="링크 복사 버튼" />
            <span>링크 복사</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareFolder;
