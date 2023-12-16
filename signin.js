const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const signInputPw = document.querySelector(".password1");
const emailErrMsg = document.querySelector(".emailErrMsg");
const pwErrMsg = document.querySelector(".pwErrMsg");
const eyeBtn1 = document.querySelector(".pw1");
const btn = document.querySelector(".cta");

function handleValidationPw() {
  if (signInputPw.value === "") {
    signInputPw.classList.add("sign-input-error");
    pwErrMsg.classList.add("sign-input-errMsg");
    pwErrMsg.classList.remove("hide");
    pwErrMsg.textContent = `비밀번호를 입력해주세요.`;
    eyeBtn1.classList.add("eye-button-focusout");
  } else {
    signInputPw.classList.remove("sign-input-error");
    pwErrMsg.classList.remove("sign-input-errMsg");
    pwErrMsg.classList.add("hide");
    eyeBtn1.classList.remove("eye-button-focusout");
  }
}

function handleValidationEmail() {
  if (signInputEmail.value === "") {
    signInputEmail.classList.add("sign-input-error");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = `이메일을 입력해주세요.`;
  } else if (signInputEmail.value !== "") {
    signInputEmail.classList.remove("sign-input-error");
    emailErrMsg.classList.remove("sign-input-errMsg");
    emailErrMsg.classList.add("hide");
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
    signInputPw.classList.add("sign-input-error");
    pwErrMsg.classList.add("sign-input-errMsg");
    pwErrMsg.classList.remove("hide");
    pwErrMsg.textContent = `비밀번호를 확인해주세요.`;
    eyeBtn1.classList.add("eye-button-focusout");
    signInputEmail.classList.add("sign-input-error");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = `이메일을 확인해주세요.`;
  } else {
    signInputPw.classList.remove("sign-input-error");
    pwErrMsg.classList.remove("sign-input-errMsg");
    pwErrMsg.classList.add("hide");
    eyeBtn1.classList.remove("eye-button-focusout");
    signInputEmail.classList.remove("sign-input-error");
    emailErrMsg.classList.remove("sign-input-errMsg");
    emailErrMsg.classList.add("hide");
  }
}

signInputPw.addEventListener("focusout", handleValidationPw);
signInputEmail.addEventListener("focusout", handleValidationEmail);
signForm.addEventListener("submit", handleSumbmit);
