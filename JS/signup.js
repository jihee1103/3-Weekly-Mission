const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const emailErrMsg = document.querySelector(".emailErrMsg");
const signInputPassword = document.querySelector(".password");
const passwordErrMsg = document.querySelector(".passwordErrMsg");
const eyeBtnSlash1 = document.querySelector(".slash1");
const eyeBtnSlash2 = document.querySelector(".slash2");
const signInputPasswordChk = document.querySelector(".passwordChk");
const passwordChkErrMsg = document.querySelector(".passwordChkErrMsg");

//이메일 유효성 검사 함수
const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function emailValidChk(email) {
  if (patternEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

function emailErrMsgHandler() {
  if (signInputEmail.value === "") {
    signInputEmail.classList.add("sign-input-err");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = "이메일을 입력해주세요.";
  } else if (signInputEmail.value === "test@codeit.com") {
    signInputEmail.classList.add("sign-input-err");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = "이미 사용중인 이메일입니다.";
  } else if (signInputEmail.value !== "" && emailValidChk(signInputEmail.value) === true) {
    signInputEmail.classList.remove("sign-input-err");
    emailErrMsg.classList.remove("sign-input-errMsg");
    emailErrMsg.classList.add("hide");
  } else if (signInputEmail.value !== "" && emailValidChk(signInputEmail.value) === false) {
    signInputEmail.classList.add("sign-input-err");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = "올바른 이메일 주소가 아닙니다.";
  }
}

//비밀번호 유효성 검사함수
const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function passwordValidChk(password) {
  if (patternPassword.test(password)) {
    return true;
  } else {
    return false;
  }
}

function passwordErrMsgHandler() {
  if (signInputPassword.value === "") {
    signInputPassword.classList.add("sign-input-err");
    passwordErrMsg.classList.add("sign-input-errMsg");
    passwordErrMsg.classList.remove("hide");
    passwordErrMsg.textContent = "비밀번호를 입력해주세요.";
    eyeBtnSlash1.classList.add("eye-button-focusout");
  } else if (signInputPassword.value !== "" && passwordValidChk(signInputPassword.value) === false) {
    signInputPassword.classList.add("sign-input-err");
    passwordErrMsg.classList.add("sign-input-errMsg");
    passwordErrMsg.classList.remove("hide");
    passwordErrMsg.textContent = "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
    eyeBtnSlash1.classList.add("eye-button-focusout");
  } else {
    signInputPassword.classList.remove("sign-input-err");
    passwordErrMsg.classList.remove("sign-input-errMsg");
    passwordErrMsg.classList.add("hide");
    eyeBtnSlash1.classList.remove("eye-button-focusout");
  }
}

function passwordChkErrMsgHandler() {
  let pw = signInputPassword.value;
  let pwChk = signInputPasswordChk.value;

  if (pw !== pwChk) {
    signInputPasswordChk.classList.add("sign-input-err");
    passwordChkErrMsg.classList.add("sign-input-errMsg");
    passwordChkErrMsg.classList.remove("hide");
    passwordChkErrMsg.textContent = "비밀번호가 일치하지 않아요.";
    eyeBtnSlash2.classList.add("eye-button-focusout");
  } else {
    signInputPasswordChk.classList.remove("sign-input-err");
    passwordChkErrMsg.classList.remove("sign-input-errMsg");
    passwordChkErrMsg.classList.add("hide");
    eyeBtnSlash2.classList.remove("eye-button-focusout");
  }
}

//submit 동작 시 유효성 확인을 위한 함수
function chkSubmit(domName) {
  if (getComputedStyle(domName).display === "none") {
    return true;
  } else {
    return false;
  }
}

function submitHandler(e) {
  e.preventDefault();
  if (signInputEmail.value !== "" && signInputPassword !== "" && signInputPasswordChk !== "") {
    if (chkSubmit(emailErrMsg) === true && chkSubmit(passwordErrMsg) === true && chkSubmit(passwordChkErrMsg) === true) {
      location.href = "folder.html";
    }
  }
}

signForm.addEventListener("submit", submitHandler);
signInputPasswordChk.addEventListener("input", passwordChkErrMsgHandler);
signInputEmail.addEventListener("focusout", emailErrMsgHandler);
signInputPassword.addEventListener("focusout", passwordErrMsgHandler);
signForm.addEventListener("submit", emailErrMsgHandler);
signForm.addEventListener("submit", passwordErrMsgHandler);
signForm.addEventListener("submit", passwordChkErrMsgHandler);
