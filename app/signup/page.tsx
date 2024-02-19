import classNames from "classnames/bind";
import styles from "../signin/SignInPage.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function SignUpPage() {
  return (
    <>
      <header>
        <div className={cx("header-container")}>
          <Link href="/">
            <img src="/images/logo-sign.png" alt="로고" />
          </Link>
          <div className={cx("ask-singup")}>
            <div className={cx("ask-singup-text")}>이미 회원이신가요?</div>
            <div className={cx("ask-singup-link")}>
              <Link href="/signin">로그인 하기</Link>
            </div>
          </div>
        </div>
      </header>

      <div className={cx("container")}>
        <form className={cx("loginForm")} action="" id="signUpForm">
          <div>
            <label htmlFor="signup-email">이메일</label>
            <input id="signup-email" type="email" />
          </div>
          <div className={cx("password-container")}>
            <label htmlFor="signup-password">비밀번호</label>
            <input id="signup-password" type="password" />
            <img
              className={cx("passwordEye")}
              src="/images/eye-off.png"
              alt="비밀번호 보이게 설정하기"
              data-img="passwordEye"
            />
          </div>
          <div className={cx("password-container")}>
            <label htmlFor="signup-repassword">비밀번호 확인</label>
            <input id="signup-repassword" type="password" />
            <img
              className={cx("passwordEye")}
              src="/images/eye-off.png"
              alt="비밀번호 보이게 설정하기"
              data-img="repasswordEye"
            />
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
        <div className={cx("content-sns")}>
          <div className={cx("content-sns-text")}>다른 방식으로 가입하기</div>
          <div className={cx("content-sns-logo")}>
            <a href="https://www.google.com/">
              <img src="/images/google-logo.png" alt="구글로고" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="/images/kakao-logo.png" alt="카카오로고" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
