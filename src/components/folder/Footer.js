import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-bar">
        <div className="footer-bar-content">
          <div className="footer-bar-content-logo">
            <span>©codeit - 2023 </span>
          </div>
          <div className="footer-bar-content-mid">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-bar-content-sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imgs/akar-icons_facebook-fill.png"
                alt="페이스북링크"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/akar-icons_twitter-fill.png" alt="트위터링크" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/akar-icons_youtube-fill.png" alt="유튜브링크" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imgs/ant-design_instagram-filled.png"
                alt="인스타그램링크"
              />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  height: 280px;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-radius: 30px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.02);

  .footer-bar {
    display: flex;
    height: 160px;
    padding: 32px 104px 64px 104px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;

    background: var(--the-julge-black, #111322);
  }

  .footer-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  }

  .footer-bar-content-logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .footer-bar-content-logo span {
    color: #676767;
    text-align: center;
    font-family: Abel;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .footer-bar-content-mid a {
    color: #cfcfcf;
    font-family: Abel;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .footer-bar-content-sns {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .footer-bar-content-sns img {
    width: 20px;
    height: 20px;
  }
`;
