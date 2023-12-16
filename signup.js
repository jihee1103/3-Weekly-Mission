const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const signInputPw = document.querySelector(".password1");
const signInputPwCheck = document.querySelector(".password2");
const emailErrMsg = document.querySelector(".emailErrMsg");
const pwErrMsg = document.querySelector(".pwErrMsg");
const pwCheckErrMsg = document.querySelector(".pwCheckErrMsg");
const eyeBtn1 = document.querySelector(".pw1");
const eyeBtn2 = document.querySelector(".pw2");
const btn = document.querySelector(".cta");

// 이메일 유효성 검사
function handleValidationEmail(e) {
  let inputValue = e.target.value;
  if (inputValue === "") {
    signInputEmail.classList.add("sign-input-error");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = `이메일을 입력해주세요.`;
  } else if (!inputValue.includes("@")) {
    signInputEmail.classList.add("sign-input-error");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = `올바른 이메일 주소가 아닙니다.`;
  } else if (inputValue === "test@codeit.com") {
    signInputEmail.classList.add("sign-input-error");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = `이미 사용 중인 이메일입니다.`;
  } else if (inputValue !== "") {
    signInputEmail.classList.remove("sign-input-error");
    emailErrMsg.classList.remove("sign-input-errMsg");
    emailErrMsg.classList.add("hide");
  }
}

// 비밀번호 유효성 검사
function handleValidationPw(e) {
  let inputValue = e.target.value;
  let checkNumber = inputValue.search(/[0-9]/g);
  let checkEnglish = inputValue.search(/[a-z]/gi);
  if (checkNumber < 0 || checkEnglish < 0 || inputValue.length < 8) {
    signInputPw.classList.add("sign-input-error");
    pwErrMsg.classList.add("sign-input-errMsg");
    pwErrMsg.classList.remove("hide");
    pwErrMsg.textContent = `비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.`;
    eyeBtn1.classList.add("eye-button-focusout");
  } else {
    signInputPw.classList.remove("sign-input-error");
    pwErrMsg.classList.remove("sign-input-errMsg");
    pwErrMsg.classList.add("hide");
    eyeBtn1.classList.remove("eye-button-focusout");
  }
}

// 비밀번호 체크
function handeleCheckPw() {
  let pw1 = signInputPw.value;
  let pw2 = signInputPwCheck.value;
  if (pw1 !== pw2) {
    signInputPwCheck.classList.add("sign-input-error");
    pwCheckErrMsg.classList.add("sign-input-errMsg");
    pwCheckErrMsg.classList.remove("hide");
    pwCheckErrMsg.textContent = `비밀번호가 일치하지 않아요.`;
    eyeBtn2.classList.add("eye-button-focusout");
  } else {
    signInputPwCheck.classList.remove("sign-input-error");
    pwCheckErrMsg.classList.remove("sign-input-errMsg");
    pwCheckErrMsg.classList.add("hide");
    eyeBtn2.classList.remove("eye-button-focusout");
  }
}

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
