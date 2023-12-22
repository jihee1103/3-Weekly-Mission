import { addStyles, deleteStyles } from "./input-style.js";
import { handleEyeBtnPw } from "./eyeicon.js";

const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const signInputPw = document.querySelector(".sign-input-pw");
const emailErrMsg = document.querySelector(".emailErrMsg");
const pwErrMsg = document.querySelector(".pwErrMsg");
const eyeBtn = document.querySelectorAll(".eye-button-off");
const eyeBtnOnPw = document.querySelector(".eye-button-on");

// 이메일 유효성 검사 함수
function handleValidationEmail() {
  if (signInputEmail.value === "") {
    addStyles(signInputEmail, emailErrMsg, `이메일을 입력해주세요.`);
  } else if (signInputEmail.value !== "") {
    deleteStyles(signInputEmail, emailErrMsg);
  }
}

// 비밀번호 유효성 검사 함수
function handleValidationPw() {
  if (signInputPw.value === "") {
    addStyles(signInputPw, pwErrMsg, `비밀번호를 입력해주세요.`);
    eyeBtn[0].classList.add("eye-button-focusout");
  } else {
    deleteStyles(signInputPw, pwErrMsg);
    eyeBtn[0].classList.remove("eye-button-focusout");
  }
}

// 로그인 유효성 검사 함수
function handleSumbmit(e) {
  if (
    signInputEmail.value === "test@codeit.com" &&
    signInputPw.value === "codeit101"
  ) {
    e.preventDefault();
    location.href = "folder.html";
  } else if (
    signInputEmail.value !== "test@codeit.com" &&
    signInputPw.value !== "codeit101"
  ) {
    e.preventDefault();
    addStyles(signInputPw, pwErrMsg, `비밀번호를 확인해주세요.`);
    eyeBtn[0].classList.add("eye-button-focusout");
    addStyles(signInputEmail, emailErrMsg, `이메일을 확인해주세요.`);
  } else {
    deleteStyles(signInputPw, pwErrMsg);
    eyeBtn[0].classList.remove("eye-button-focusout");
    deleteStyles(signInputEmail, emailErrMsg);
  }
}

signInputPw.addEventListener("focusout", handleValidationPw);
signInputEmail.addEventListener("focusout", handleValidationEmail);
signForm.addEventListener("submit", handleSumbmit);
eyeBtn[0].addEventListener("click", handleEyeBtnPw);
eyeBtnOnPw.addEventListener("click", handleEyeBtnPw);
