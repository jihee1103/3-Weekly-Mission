import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="index.html">
            <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        </nav>
        <div className="hero-header">
          <h1 className="slogan">
            <span className="slogan-gradient background-clip-text">
              세상의 모든 정보
            </span>
            를
            <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <a className="cta cta-long" href="signup.html">
            <span>링크 추가하기</span>
          </a>
          <img
            src="./images/hero.png"
            className="hero-image"
            alt="Linkbrary 서비스 소개"
          />
        </div>
      </header>
      <article>
        <section>
          <h2 className="title">
            <span className="title-1-gradient background-clip-text">
              {" "}
              원하는 링크
            </span>
            를
            <br />
            저장하세요
          </h2>
          <p className="description">
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />한 공간에 저장하세요.
          </p>
          <img
            src="./images/image1.png"
            className="content-image"
            alt="링크의 내용이 담긴 카드들"
          />
        </section>
        <section>
          <h2 className="title">
            링크를 폴더로
            <br />
            <span className="title-2-gradient background-clip-text">관리</span>
            하세요
          </h2>
          <p className="description">
            나만의 폴더를 무제한으로 만들고
            <br />
            다양하게 활용할 수 있습니다.
          </p>
          <img
            src="./images/image2.png"
            className="content-image"
            alt="폴더 이름 변경 기능"
          />
        </section>
        <section>
          <h2 className="title">
            저장한 링크를
            <br />
            <span className="title-3-gradient background-clip-text">공유</span>
            해 보세요
          </h2>
          <p className="description">
            여러 링크를 폴더에 담고 공유할 수 있습니다.
            <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를
            <br />
            공유해 보세요.
          </p>
          <img
            src="./images/image3.png"
            className="content-image"
            alt="폴더 공유 기능"
          />
        </section>
        <section>
          <h2 className="title">
            저장한 링크를
            <br />
            <span className="title-4-gradient background-clip-text">검색</span>
            해 보세요
          </h2>
          <p className="description">
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
          <img
            src="./images/image4.png"
            className="content-image"
            alt="링크 검색 기능"
          />
        </section>
      </article>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <div className="footer-links">
            <a className="footer-link" href="privacy.html">
              Privacy Policy
            </a>
            <a className="footer-link" href="faq.html">
              FAQ
            </a>
          </div>
          <div className="sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/facebook.svg"
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/twitter.svg"
                alt="twitter 홈페이지로 연결된 twitter 로고"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/youtube.svg"
                alt="youtube 홈페이지로 연결된 youtube 로고"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/instagram.svg"
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
