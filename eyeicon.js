const eyeBtn = document.querySelector(".eye-button");
const eyeBtn1 = document.querySelector(".pw1");
const eyeBtn2 = document.querySelector(".pw2");
const eyeBtnOn = document.querySelector(".eye-button-on");
const eyeBtnOnPwCheck = document.querySelector(".eye-button-on-pwcheck");
const signInputPw = document.querySelector(".password1");
const signInputPwCheck = document.querySelector(".password2");

function handleEyeBtnPw() {
  eyeBtnOn.classList.toggle("hide");
  eyeBtn1.classList.toggle("hide");
  if (eyeBtn1.classList.contains("hide")) {
    signInputPw.type = "text";
  } else {
    signInputPw.type = "password";
  }
}

function handleEyeBtnPwCheck() {
  eyeBtnOnPwCheck.classList.toggle("hide");
  eyeBtn2.classList.toggle("hide");
  if (eyeBtn2.classList.contains("hide")) {
    signInputPwCheck.type = "text";
  } else {
    signInputPwCheck.type = "password";
  }
}

eyeBtn1.addEventListener("click", handleEyeBtnPw);
eyeBtnOn.addEventListener("click", handleEyeBtnPw);
eyeBtn2.addEventListener("click", handleEyeBtnPwCheck);
eyeBtnOnPwCheck.addEventListener("click", handleEyeBtnPwCheck);
