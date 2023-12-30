import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <div class="nav_wrap">
          <a href="index.html">
            <img
              class="logo"
              src="./images/logo.png"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
          <a class="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
