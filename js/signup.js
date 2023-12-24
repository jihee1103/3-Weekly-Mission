import { addStyles, deleteStyles } from "./input-style.js";
import { handleEyeBtnPw, handleEyeBtnPwCheck } from "./eyeicon.js";

const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const signInputPw = document.querySelector(".sign-input-pw");
const signInputPwCheck = document.querySelector(".sign-input-pw-check");
const emailErrMsg = document.querySelector(".emailErrMsg");
const pwErrMsg = document.querySelector(".pwErrMsg");
const pwCheckErrMsg = document.querySelector(".pwCheckErrMsg");
const eyeBtn = document.querySelectorAll(".eye-button-off");
const eyeBtnOnPw = document.querySelector(".eye-button-on");
const eyeBtnOnPwCheck = document.querySelector(".eye-button-on-pwcheck");

// 이메일 유효성 검사
function handleValidationEmail() {
  if (signInputEmail.value === "") {
    addStyles(signInputEmail, emailErrMsg, `이메일을 입력해주세요.`);
  } else if (!signInputEmail.value.includes("@")) {
    addStyles(signInputEmail, emailErrMsg, `올바른 이메일 주소가 아닙니다.`);
  } else if (!signInputEmail.value.includes(".com")) {
    addStyles(signInputEmail, emailErrMsg, `올바른 이메일 주소가 아닙니다.`);
  } else if (signInputEmail !== "") {
    deleteStyles(signInputEmail, emailErrMsg);
  }
}

// 비밀번호 유효성 검사
function handleValidationPw(e) {
  let inputValue = e.target.value;
  let checkNumber = inputValue.search(/[0-9]/g);
  let checkEnglish = inputValue.search(/[a-z]/gi);
  if (checkNumber < 0 || checkEnglish < 0 || inputValue.length < 8) {
    addStyles(
      signInputPw,
      pwErrMsg,
      `비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.`
    );
    eyeBtn[0].classList.add("eye-button-focusout");
  } else {
    deleteStyles(signInputPw, pwErrMsg);
    eyeBtn[0].classList.remove("eye-button-focusout");
  }
}

// 비밀번호 일치 체크
function handeleCheckPw() {
  let pw1 = signInputPw.value;
  let pw2 = signInputPwCheck.value;
  if (pw1 !== pw2) {
    addStyles(signInputPwCheck, pwCheckErrMsg, `비밀번호가 일치하지 않아요.`);
    eyeBtn[1].classList.add("eye-button-focusout");
  } else {
    deleteStyles(signInputPwCheck, pwCheckErrMsg);
    eyeBtn[1].classList.remove("eye-button-focusout");
  }
}

// 회원가입 유효성 검사 함수
async function handleSumbmit(e) {
  try {
    e.preventDefault();
    let loginData = {
      email: signInputEmail.value,
      password: signInputPw.value,
    };
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (
      loginData.email !== "test@codeit.com" &&
      loginData.password === signInputPwCheck.value &&
      response.status === 200
    ) {
      location.href = "folder.html";
    } else if (
      loginData.email === "test@codeit.com" &&
      response.status === 400
    ) {
      addStyles(signInputEmail, emailErrMsg, `이미 사용 중인 이메일입니다.`);
    }
  } catch (error) {}

  // if (
  //   signInputEmail.value !== "test@codeit.com" &&
  //   signInputPw.value === signInputPwCheck.value
  // ) {
  //   e.preventDefault();
  //   location.href = "folder.html";
  // }
}

signInputEmail.addEventListener("focusout", handleValidationEmail);
signInputPw.addEventListener("focusout", handleValidationPw);
signInputPwCheck.addEventListener("input", handeleCheckPw);
signForm.addEventListener("submit", handleSumbmit);
eyeBtn[0].addEventListener("click", handleEyeBtnPw);
eyeBtnOnPw.addEventListener("click", handleEyeBtnPw);
eyeBtn[1].addEventListener("click", handleEyeBtnPwCheck);
eyeBtnOnPwCheck.addEventListener("click", handleEyeBtnPwCheck);
