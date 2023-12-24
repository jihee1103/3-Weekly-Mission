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
async function handleSumbmit(e) {
  try {
    e.preventDefault();
    let loginData = {
      email: signInputEmail.value,
      password: signInputPw.value,
    };
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (response.status === 200) {
      location.href = "folder.html";
    } else if (response.status === 400) {
      addStyles(signInputPw, pwErrMsg, `비밀번호를 확인해주세요.`);
      eyeBtn[0].classList.add("eye-button-focusout");
      addStyles(signInputEmail, emailErrMsg, `이메일을 확인해주세요.`);
    } else {
      deleteStyles(signInputPw, pwErrMsg);
      eyeBtn[0].classList.remove("eye-button-focusout");
      deleteStyles(signInputEmail, emailErrMsg);
    }
  } catch (err) {
    // 어떤 처리를 해줘야하지?
  }
}

signInputPw.addEventListener("focusout", handleValidationPw);
signInputEmail.addEventListener("focusout", handleValidationEmail);
signForm.addEventListener("submit", handleSumbmit);
eyeBtn[0].addEventListener("click", handleEyeBtnPw);
eyeBtnOnPw.addEventListener("click", handleEyeBtnPw);
