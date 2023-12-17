import { addStyles, deleteStyles } from "./input-style";

const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const signInputPw = document.querySelector(".password1");
const signInputPwCheck = document.querySelector(".password2");
const emailErrMsg = document.querySelector(".emailErrMsg");
const pwErrMsg = document.querySelector(".pwErrMsg");
const pwCheckErrMsg = document.querySelector(".pwCheckErrMsg");
const eyeBtn1 = document.querySelector(".pw1");
const eyeBtn2 = document.querySelector(".pw2");

// 이메일 유효성 검사
function handleValidationEmail() {
  if (signInputEmail.value === "") {
    addStyles(signInputEmail, emailErrMsg, `이메일을 입력해주세요.`);
  } else if (!signInputEmail.value.includes("@")) {
    addStyles(signInputEmail, emailErrMsg, `올바른 이메일 주소가 아닙니다.`);
  } else if (inputValue === "test@codeit.com") {
    addStyles(signInputEmail, emailErrMsg, `이미 사용 중인 이메일입니다.`);
  } else if (inputValue !== "") {
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
    eyeBtn1.classList.add("eye-button-focusout");
  } else {
    deleteStyles(signInputPw, pwErrMsg);
    eyeBtn1.classList.remove("eye-button-focusout");
  }
}

// 비밀번호 일치 체크
function handeleCheckPw() {
  let pw1 = signInputPw.value;
  let pw2 = signInputPwCheck.value;
  if (pw1 !== pw2) {
    addStyles(signInputPwCheck, pwCheckErrMsg, `비밀번호가 일치하지 않아요.`);
    eyeBtn2.classList.add("eye-button-focusout");
  } else {
    deleteStyles(signInputPwCheck, pwCheckErrMsg);
    eyeBtn2.classList.remove("eye-button-focusout");
  }
}

// 회원가입 유효성 검사 함수
function handleSumbmit(e) {
  if (
    signInputEmail.value !== "test@codeit.com" &&
    signInputPw.value === signInputPwCheck.value
  ) {
    e.preventDefault();
    location.href = "folder.html";
  }
}

signInputEmail.addEventListener("focusout", handleValidationEmail);
signInputPw.addEventListener("focusout", handleValidationPw);
signInputPwCheck.addEventListener("input", handeleCheckPw);
signForm.addEventListener("submit", handleSumbmit);
