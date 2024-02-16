import classNames from "classnames/bind";
import styles from "./SignInPage.module.scss";

const cx = classNames.bind(styles);

export default function SignInPage() {
  return (
    <div className={cx("background")}>
      <header>
        <div className={cx("header-container")}>
          <a href="/">
            <img src="images/logo-sign.png" alt="로고" />
          </a>
          <div className={cx("ask-singup")}>
            <div className={cx("ask-singup-text")}>회원이 아니신가요?</div>
            <div className={cx("ask-singup-link")}>
              <a href="">회원 가입하기</a>
            </div>
          </div>
        </div>
      </header>
      <div className={cx("container")}>
        <form className={cx("loginForm")} action="" id="loginForm">
          <div>
            <label htmlFor="signup-email">이메일</label>
            <input className={cx("input")} id="signup-email" type="email" />
          </div>
          <div className={cx("password-container")}>
            <label htmlFor="signup-password">비밀번호</label>
            <input
              className={cx("input")}
              id="signup-password"
              type="password"
            />
            <img
              className={cx("passwordEye")}
              src="images/eye-off.png"
              alt="비밀번호 보이게 설정하기"
              data-img="passwordEye"
            />
          </div>
          <div>
            <button id="loginButton" type="submit">
              로그인
            </button>
          </div>
        </form>
        <div className={cx("content-sns")}>
          <div className={cx("content-sns-text")}>소셜 로그인</div>
          <div className={cx("content-sns-logo")}>
            <a href="https://www.google.com/">
              <img src="images/google-logo.png" alt="구글로고" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="images/kakao-logo.png" alt="카카오로고" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
