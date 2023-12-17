//데이터
const emailInput = document.querySelector("#signup-email");
const passInput = document.querySelector("#password");
const inputs = document.querySelectorAll(".input");
const errorMessage = document.querySelectorAll(".message");
const secondPassInput = document.querySelector("#check-password");
const signinbtn = document.querySelector(".signin-confirm");
const signupbtn = document.querySelector(".signup-confirm");
let link = "/folder.html";

//이메일 에러
function validEmail(e) {
  const email = e.target.value;
  if (email.length === 0) {
    errorMessage[0].textContent = "이메일을 입력해주세요.";
    errorMessage[0].classList.add("error");
    emailInput.classList.add("error-border");
  } else if (!email.includes("@")) {
    errorMessage[0].textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.add("error-border");
    inputs[0].lastElementChild.classList.add("error-font");
  } else {
    emailInput.classList.remove("error-border");
    errorMessage[0].remove();
  }
}

function passChecker(e) {
  const pass = e.target.value;
  if (pass.length === 0) {
    errorMessage[1].textContent = "비밀번호를 입력해주세요.";
    errorMessage[1].classList.add("error");
    passInput.classList.add("error-border");
  } else {
    passInput.classList.remove("error-border");
    errorMessage[1].remove();
  }
}

function signupPassChecker(e) {
  if (passInput.value !== secondPassInput.value) {
    errorMessage[2].textContent = "비밀번호가 일지하지 않아요.";
    errorMessage[2].classList.add("error");
    secondPassInput.classList.add("error-border");
  } else {
    secondPassInput.classList.remove("error-border");
    errorMessage[2].remove();
  }
}

function signinConfirm(e) {
  if (
    emailInput.value === "test@codeit.com" &&
    passInput.value === "codeit101"
  ) {
    location.href = link;
  } else {
    errorMessage[0].textContent = "이메일을 확인해주세요.";
    errorMessage[0].classList.add("error");
    emailInput.classList.add("error-border");

    errorMessage[1].textContent = "비밀번호를 확인해주세요.";
    errorMessage[1].classList.add("error");
    passInput.classList.add("error-border");
  }
}

emailInput.addEventListener("focusout", validEmail);
passInput.addEventListener("focusout", passChecker);
secondPassInput.addEventListener("focusout", signupPassChecker);
signinbtn.addEventListener("click", signinConfirm);
