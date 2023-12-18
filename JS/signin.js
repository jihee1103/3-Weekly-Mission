const signForm = document.querySelector(".sign-form");
const signInputEmail = document.querySelector(".email");
const emailErrMsg = document.querySelector(".emailErrMsg");
const signInputPassword = document.querySelector(".password");
const passwordErrMsg = document.querySelector(".passwordErrMsg");
const eyeBtnSlash1 = document.querySelector(".slash1");
const eyeBtnNonSlash1 = document.querySelector(".non-slash1");

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

function passwordErrMsgHandler() {
  if (signInputPassword.value === "") {
    signInputPassword.classList.add("sign-input-err");
    passwordErrMsg.classList.add("sign-input-errMsg");
    passwordErrMsg.classList.remove("hide");
    passwordErrMsg.textContent = "비밀번호를 입력해주세요.";
    eyeBtnSlash1.classList.add("eye-button-focusout");
    eyeBtnNonSlash1.classList.add("eye-button-focusout");
  } else {
    signInputPassword.classList.remove("sign-input-err");
    passwordErrMsg.classList.remove("sign-input-errMsg");
    passwordErrMsg.classList.add("hide");
    eyeBtnSlash1.classList.remove("eye-button-focusout");
    eyeBtnNonSlash1.classList.remove("eye-button-focusout");
  }
}

function submitHandler(e) {
  if (signInputEmail.value === "test@codeit.com" && signInputPassword.value === "codeit101") {
    e.preventDefault(); //질문하기 - submit 사용할때 자주 활용되는 것인지?
    location.href = "folder.html";
  } else if (signInputEmail.value !== "test@codeit.com" && signInputPassword.value !== "codeit101") {
    e.preventDefault();
    signInputEmail.classList.add("sign-input-err");
    emailErrMsg.classList.add("sign-input-errMsg");
    emailErrMsg.classList.remove("hide");
    emailErrMsg.textContent = "이메일을 확인해주세요.";
    signInputPassword.classList.add("sign-input-err");
    passwordErrMsg.classList.add("sign-input-errMsg");
    passwordErrMsg.classList.remove("hide");
    passwordErrMsg.textContent = "비밀번호를 확인해주세요.";
    eyeBtnSlash1.classList.add("eye-button-focusout");
  }
}

signForm.addEventListener("submit", submitHandler);
signInputEmail.addEventListener("focusout", emailErrMsgHandler);
signInputPassword.addEventListener("focusout", passwordErrMsgHandler);
