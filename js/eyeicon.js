const eyeBtn1 = document.querySelector(".pw1");
const eyeBtn2 = document.querySelector(".pw2");
const eyeBtnOnPw = document.querySelector(".eye-button-on");
const eyeBtnOnPwCheck = document.querySelector(".eye-button-on-pwcheck");
const signInputPw = document.querySelector(".password1");
const signInputPwCheck = document.querySelector(".password2");

const CLASS_HIDE = "hide";

function handleEyeBtn(btnObj, btn, signInput) {
  btnObj.classList.toggle(CLASS_HIDE);
  btn.classList.toggle(CLASS_HIDE);
  if (btn.classList.contains(CLASS_HIDE)) {
    signInput.type = "text";
  } else {
    signInput.type = "password";
  }
}
function handleEyeBtnPw() {
  handleEyeBtn(eyeBtnOnPw, eyeBtn1, signInputPw);
}

function handleEyeBtnPwCheck() {
  handleEyeBtn(eyeBtnOnPwCheck, eyeBtn2, signInputPwCheck);
}

eyeBtn1.addEventListener("click", handleEyeBtnPw);
eyeBtnOnPw.addEventListener("click", handleEyeBtnPw);
eyeBtn2.addEventListener("click", handleEyeBtnPwCheck);
eyeBtnOnPwCheck.addEventListener("click", handleEyeBtnPwCheck);
