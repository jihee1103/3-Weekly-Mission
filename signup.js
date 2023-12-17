const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const passwordCheckError = document.querySelector("#password-check-error");
const signBtn = document.querySelector(".sign-btn");

function validateEmail() {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (email.value === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    email.classList.add("input-error");
  } else if (!email_regex.test(email.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.classList.add("input-error");
  } else if (email.value === "test@codeit.com") {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
  } else {
    emailError.textContent = "";
    email.className = "sign-input";
  }
}

function validatePassword() {
  const password_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (password.value === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    password.classList.add("input-error");
  } else if (!password_regex.test(password.value)) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.";
    password.classList.add("input-error");
  } else {
    passwordError.textContent = "";
    password.classList = "sign-input";
  }
}

function confirmPassword() {
  if (!passwordCheck.value) {
    passwordCheckError.textContent = "비밀번호를 입력해주세요.";
  } else if (passwordCheck !== password) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    passwordCheckError.textContent = "";
    passwordCheck.className = "sign-input";
  }
}

email.addEventListener("focusout", validateEmail);
password.addEventListener("focusout", validatePassword);
passwordCheck.addEventListener("focusout", confirmPassword);
