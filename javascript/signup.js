const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputConfirmPassword = document.querySelector("#confirm-password");
const signupButton = document.querySelector("#signup-button");
const inputError = document.querySelector(".inputbox-error");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");
const confirmPasswordErrorMessage = document.querySelector(
  "#confirm-password-error-message"
);
const passwordOnOff = document.querySelector("#password-show-hide");
const confirmPasswordOnOff = document.querySelector(
  "#confirm-password-show-hide"
);

function addErrorStyle(element) {
  element.classList.add("inputbox-error");
}

function removeErrorStyle(element) {
  element.classList.remove("inputbox-error");
}

function showErrorMessage(element, message) {
  element.textContent = message;
}

if (localStorage.accessToken) {
  location.href = "./folder.html";
}

async function checkEmailConfilct() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail.value,
      }),
    }
  );
  if (response.status === 409) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    return false;
  }
}

function checkEmail() {
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!inputEmail.value) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "이메일을 입력해주세요.");
    return false;
  }
  if (!regEmail.test(inputEmail.value)) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    return false;
  }
  if (inputEmail.value === "test@codeit.com") {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "이미 사용 중인 이메일입니다.");
    return false;
  }
  checkEmailConfilct();
  removeErrorStyle(inputEmail);
  showErrorMessage(emailErrorMessage, "");
  return true;
}

function checkPassword() {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (!inputPassword.value) {
    addErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "비밀번호를 입력해주세요.");
    return false;
  }
  if (!regPassword.test(inputPassword.value)) {
    addErrorStyle(inputPassword);
    showErrorMessage(
      passwordErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
    );
    return false;
  }
  if (inputPassword.value && regPassword.test(inputPassword.value)) {
    removeErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "");
    return true;
  }
}

function checkConfirmPassword() {
  if (!inputConfirmPassword.value) {
    addErrorStyle(inputConfirmPassword);
    showErrorMessage(confirmPasswordErrorMessage, "비밀번호를 입력해주세요.");
    return false;
  }
  if (inputConfirmPassword.value !== inputPassword.value) {
    addErrorStyle(inputConfirmPassword);
    showErrorMessage(confirmPasswordErrorMessage, "비밀번호가 다릅니다.");
    return false;
  }
  removeErrorStyle(inputConfirmPassword);
  showErrorMessage(confirmPasswordErrorMessage, "");
  return true;
}

async function signUp() {
  if (
    checkEmail() === true &&
    checkPassword() === true &&
    checkConfirmPassword() === true
  ) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail.value,
        password: inputPassword.value,
      }),
    });
    if (response.status === 200) {
      location.href = "./folder.html";

      const result = await response.json();
      const { accessToken } = result.data;
      localStorage.setItem("accessToken", accessToken);
    }
  }
}

function showOrHidePassword(passwordToggleButton, passwordInputField) {
  if (passwordInputField.type == "password") {
    passwordInputField.type = "text";
    passwordToggleButton.src = "./image/eye-on.svg";
  } else if (passwordInputField.type == "text") {
    passwordInputField.type = "password";
    passwordToggleButton.src = "./image/eye-off.svg";
  }
}

passwordOnOff.addEventListener("click", () => {
  showOrHidePassword(passwordOnOff, inputPassword);
});

confirmPasswordOnOff.addEventListener("click", () => {
  showOrHidePassword(confirmPasswordOnOff, inputConfirmPassword);
});

document.addEventListener("keypress", (event) => {
  if (
    (event.target === inputEmail ||
      event.target === inputPassword ||
      event.target === inputConfirmPassword) &&
    event.key === "Enter"
  ) {
    signUp();
  }
});

document.addEventListener("focusout", (event) => {
  if (event.target === inputEmail) {
    checkEmail();
  } else if (event.target === inputPassword) {
    checkPassword();
  } else if (event.target === inputConfirmPassword) {
    checkConfirmPassword();
  }
});

signupButton.addEventListener("click", signUp);
