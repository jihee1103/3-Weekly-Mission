const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const signinButton = document.querySelector("#signin-button");
const inputError = document.querySelector(".inputbox-error");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");

function checkEmail() {
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!inputEmail.value) {
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    inputEmail.classList.add("inputbox-error");
  } else if (!regEmail.test(inputEmail.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.classList.add("inputbox-error");
  } else {
    emailErrorMessage.textContent = "";
    inputEmail.classList.remove("inputbox-error");
  }
}

function checkPassword() {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (!inputPassword.value) {
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    inputPassword.classList.add("inputbox-error");
  } else if (!regPassword.test(inputPassword.value)) {
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.";
    inputPassword.classList.add("inputbox-error");
  } else {
    passwordErrorMessage.textContent = "";
    inputPassword.classList.remove("inputbox-error");
  }
}

function signIn() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    alert("로그인 성공");
  } else {
    alert("로그인 실패");
  }
}

function pressEnterToSignIn(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    signIn();
  }
}

inputEmail.addEventListener("focusout", checkEmail);
inputPassword.addEventListener("focusout", checkPassword);
signinButton.addEventListener("click", signIn);
