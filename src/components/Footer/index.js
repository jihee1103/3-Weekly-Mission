import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import youtubeIcon from "./youtube.svg";
import instagramIcon from "./instagram.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span>@codeit - 2023</span>

      <FooterCenterContentsWrapper>
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </FooterCenterContentsWrapper>

      <div>
        <button>
          <img src={facebookIcon} alt="페이스북 이동 버튼" />
        </button>
        <button>
          <img src={twitterIcon} alt="트위터 이동 버튼" />
        </button>
        <button>
          <img src={youtubeIcon} alt="유튜브 이동 버튼" />
        </button>
        <button>
          <img src={instagramIcon} alt="인스타그램 이동 버튼" />
        </button>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  background-color: #111322;
  align-items: center;
  justify-content: space-between;
  padding: 32px 104px 64px 104px;
  margin-top: 100px;
  height: 160px;
  box-sizing: border-box;

  span {
    color: #676767;
    font-size: 16px;
  }

  button {
    border: none;
    background-color: #111322;
  }
`;

const FooterCenterContentsWrapper = styled.div`
  gap: 20px;
  display: flex;
`;
