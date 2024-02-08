import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import styles from "./ShareIconBox.module.css";
const DEPLOYED_URL = `netify url`;

function ShareIconBox(folderId: any) {
  const { userData } = useUserData();

  const SHARE_URL_TEXT = `${DEPLOYED_URL}/shared?user=${userData.id}&folder=${folderId}`;
  const location = useLocation();

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFacebookClick = () => {};

  const handleKakaoClick = () => {};

  return (
    <div className={styles.iconBox}>
      <span className={styles.icon}>
        <span className={styles.kakaoIcon}>
          <img src="/assets/icon-kakao-fill.svg" alt="kakao" />
        </span>
        <span className={styles.iconText}>카카오톡</span>
      </span>
      <span className={styles.icon}>
        <span className={styles.facebookIcon}>
          <img src="/assets/icon-facebook-fill.svg" alt="facebook" />
        </span>
        <span className={styles.iconText}>페이스북</span>
      </span>
      <span
        className={styles.icon}
        onClick={() =>
          handleCopyClipBoard(`${DEPLOYED_URL}${location.pathname}`)
        }
      >
        <span className={styles.linkIcon}>
          <img src="/assets/link-icon.svg" alt="share" />
        </span>
        <span className={styles.iconText}>링크 복사</span>
      </span>
    </div>
  );
}

export default ShareIconBox;
