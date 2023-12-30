import React from "react";
import facebookIcon from "../assets/images/akar-icons_facebook-fill.svg";
import twitterIcon from "../assets/images/akar-icons_twitter-fill.svg";
import youtubeIcon from "../assets/images/akar-icons_youtube-fill.svg";
import instagramIcon from "../assets/images/ant-design_instagram-filled.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>Codeit-2023</span>
      <ul className="links">
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
      <ul className="sns">
        <li>
          <a href="https://facebook.com/" target="_blank">
            <img src={facebookIcon} alt="페이스북 이동 아이콘" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="트위터 이동 아이콘" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeIcon} alt="유튜브 이동 아이콘" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="인스타그램 이동 아이콘" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
