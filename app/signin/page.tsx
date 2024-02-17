import classNames from "classnames/bind";
import styles from "./SignInPage.module.scss";
import SignInForm from "../../components/signin/SignInForm";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function SignInPage() {
  return (
    <div className={cx("background")}>
      <header>
        <div className={cx("header-container")}>
          <Link href="/">
            <img src="/images/logo-sign.png" alt="로고" />
          </Link>
          <div className={cx("ask-singup")}>
            <div className={cx("ask-singup-text")}>회원이 아니신가요?</div>
            <div className={cx("ask-singup-link")}>
              <Link href="/signup">회원 가입하기</Link>
            </div>
          </div>
        </div>
      </header>
      <div className={cx("container")}>
        <SignInForm />
        <div className={cx("content-sns")}>
          <div className={cx("content-sns-text")}>소셜 로그인</div>
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
    </div>
  );
}
