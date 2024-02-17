import { useState, useEffect } from "react";
import styles from "../../styles/Shared.module.css";

export default function Header() {
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => response.json())
      .then((data) => {
        setProfileId(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <>
      <nav>
        <div className={styles.box}>
          <a href="/">
            <img src="/assets/Icons/logo.svg" alt="아이콘 이미지" />
          </a>
        </div>
      </nav>
    </>
  );
}
