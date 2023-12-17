const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const signInputPw = document.querySelector(".password1");
const emailErrMsg = document.querySelector(".emailErrMsg");
const pwErrMsg = document.querySelector(".pwErrMsg");
const eyeBtn1 = document.querySelector(".pw1");
const btn = document.querySelector(".cta");

const INPUT_ERROR_STYLE = "sign-input-error";
const INPUT_ERROR_MSG_STYLE = "sign-input-errMsg";

function addStyles(signInput, errMsgObj, errMsgText) {
  signInput.classList.add(INPUT_ERROR_STYLE);
  errMsgObj.classList.add(INPUT_ERROR_MSG_STYLE);
  errMsgObj.classList.remove("hide");
  errMsgObj.textContent = errMsgText;
}

function deleteStyles(signInput, errMsgObj) {
  signInput.classList.remove("sign-input-error");
  errMsgObj.classList.remove("sign-input-errMsg");
  errMsgObj.classList.add("hide");
}

function handleValidationPw() {
  if (signInputPw.value === "") {
    addStyles(signInputPw, pwErrMsg, `비밀번호를 입력해주세요.`);
    eyeBtn1.classList.add("eye-button-focusout");
  } else {
    deleteStyles(signInputPw, pwErrMsg);
    eyeBtn1.classList.remove("eye-button-focusout");
  }
}

function handleValidationEmail() {
  if (signInputEmail.value === "") {
    addStyles(signInputEmail, emailErrMsg, `이메일을 입력해주세요.`);
  } else if (signInputEmail.value !== "") {
    deleteStyles(signInputEmail, emailErrMsg);
  }
}

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
    eyeBtn1.classList.add("eye-button-focusout");
    addStyles(signInputEmail, emailErrMsg, `이메일을 확인해주세요.`);
  } else {
    deleteStyles(signInputPw, pwErrMsg);
    eyeBtn1.classList.remove("eye-button-focusout");
    deleteStyles(signInputEmail, emailErrMsg);
  }
}

signInputPw.addEventListener("focusout", handleValidationPw);
signInputEmail.addEventListener("focusout", handleValidationEmail);
signForm.addEventListener("submit", handleSumbmit);
