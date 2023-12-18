const eyeBtnSlash1 = document.querySelector(".slash1");
const eyeBtnNonSlash1 = document.querySelector(".non-slash1");
const eyeBtnSlash2 = document.querySelector(".slash2");
const eyeBtnNonSlash2 = document.querySelector(".non-slash2");
const signInputPw = document.querySelector(".password");
const signInputPwChk = document.querySelector(".passwordChk");

function eyeBtnPwHandler() {
  eyeBtnSlash1.classList.toggle("hide");
  eyeBtnNonSlash1.classList.toggle("hide");

  if (eyeBtnSlash1.classList.contains("hide")) {
    signInputPw.type = "text";
  } else {
    signInputPw.type = "password";
  }
}

function eyeBtnPwChkHandler() {
  eyeBtnSlash2.classList.toggle("hide");
  eyeBtnNonSlash2.classList.toggle("hide");

  if (eyeBtnSlash2.classList.contains("hide")) {
    signInputPwChk.type = "text";
  } else {
    signInputPwChk.type = "password";
  }
}

eyeBtnSlash1.addEventListener("click", eyeBtnPwHandler);
eyeBtnNonSlash1.addEventListener("click", eyeBtnPwHandler);
eyeBtnSlash2.addEventListener("click", eyeBtnPwChkHandler);
eyeBtnNonSlash2.addEventListener("click", eyeBtnPwChkHandler);
