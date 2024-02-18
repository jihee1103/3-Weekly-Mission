"use client";

import Image from "next/image";
import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import youtubeIcon from "./youtube.svg";
import instagramIcon from "./instagram.svg";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>@codeit - 2023</span>

      <div className={styles.wrapper}>
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </div>

      <div>
        <button>
          <Image
            src={facebookIcon}
            width={20}
            height={20}
            alt="페이스북 이동 버튼"
          />
        </button>
        <button>
          <Image
            src={twitterIcon}
            width={20}
            height={20}
            alt="트위터 이동 버튼"
          />
        </button>
        <button>
          <Image
            src={youtubeIcon}
            width={20}
            height={20}
            alt="유튜브 이동 버튼"
          />
        </button>
        <button>
          <Image
            src={instagramIcon}
            width={20}
            height={20}
            alt="인스타그램 이동 버튼"
          />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
