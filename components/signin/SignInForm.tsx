"use client";

import classNames from "classnames/bind";
import styles from "./SignInForm.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState("password");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("이메일을 입력해 주세요.");
    } else if (!validateEmail(email)) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  const handleTogglePassword = () => {
    setPasswordError("");
    setVisiblePassword((preState) => {
      if (preState === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        window.location.href = "/folder";
      } else {
        const data = await response.json();
        setEmailError(data.error && "이메일을 확인해 주세요.");
        setPasswordError(data.error && "비밀번호를 확인해 주세요.");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form
      className={cx("loginForm")}
      action=""
      id="loginForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="signup-email">이메일</label>
        <input
          className={cx("input")}
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          placeholder="이메일을 입력해주세요"
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className={cx("password-container")}>
        <label htmlFor="signup-password">비밀번호</label>
        <input
          className={cx("input")}
          id="signup-password"
          type={visiblePassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          placeholder="비밀번호를 입력해주세요"
        />
        <img
          className={cx("passwordEye")}
          src={
            visiblePassword === "password"
              ? "/images/eye-off.png"
              : "/images/eye-on.png"
          }
          alt="비밀번호 보이게 설정하기"
          data-img="passwordEye"
          onClick={handleTogglePassword}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <div>
        <button id="loginButton" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
