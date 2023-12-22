const eyeBtn = document.querySelectorAll(".eye-button-off");
const eyeBtnOnPw = document.querySelector(".eye-button-on");
const eyeBtnOnPwCheck = document.querySelector(".eye-button-on-pwcheck");
const signInputPw = document.querySelector(".sign-input-pw");
const signInputPwCheck = document.querySelector(".sign-input-pw-check");

const CLASS_HIDE = "hide";

export function handleEyeBtn(btnObjName, eyeBtn, signInput) {
  btnObjName.classList.toggle(CLASS_HIDE);
  eyeBtn.classList.toggle(CLASS_HIDE);
  if (eyeBtn.classList.contains(CLASS_HIDE)) {
    signInput.type = "text";
  } else {
    signInput.type = "password";
  }
}
export function handleEyeBtnPw() {
  handleEyeBtn(eyeBtnOnPw, eyeBtn[0], signInputPw);
}

export function handleEyeBtnPwCheck() {
  handleEyeBtn(eyeBtnOnPwCheck, eyeBtn[1], signInputPwCheck);
}

eyeBtn[0].addEventListener("click", handleEyeBtnPw);
eyeBtnOnPw.addEventListener("click", handleEyeBtnPw);
eyeBtn[1].addEventListener("click", handleEyeBtnPwCheck);
eyeBtnOnPwCheck.addEventListener("click", handleEyeBtnPwCheck);
