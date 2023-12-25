const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector(".login-btn");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

const testEmail = "test@codeit.com";
const testPassword = "sprint101";

if (localStorage.accessToken) {
  window.location.href = "forder.html";
}

function validateEmail() {
  if (emailInput.value === "") {
    return validateInput(emailInput, emailError, "이메일을 입력해주세요.");
  }

  if (!email_regex.test(emailInput.value)) {
    return validateInput(
      emailInput,
      emailError,
      "올바른 이메일 주소가 아닙니다."
    );
  }

  return validateInput(emailInput, emailError, "");
}

function validatePassword() {
  if (passwordInput.value === "") {
    return validateInput(
      passwordInput,
      passwordError,
      "비밀번호를 입력해주세요."
    );
  }

  if (!password_regex.test(passwordInput.value)) {
    return validateInput(
      passwordInput,
      passwordError,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
    );
  }

  return validateInput(passwordInput, passwordError, "");
}

async function signIn() {
  if (emailInput.value === testEmail && passwordInput.value === testPassword) {
    console.log("asddddddddkfksjfkd");
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      localStorage.setItem("accessToken", result.data.accessToken);
      alert("로그인 되었습니다.");
      window.location.href = "/folder.html";
    }
  }
  if (emailInput.value !== testEmail) {
    return validateInput(emailInput, emailError, "이메일을 확인해주세요.");
  }

  if (passwordInput.value !== testPassword) {
    return validateInput(
      passwordInput,
      passwordError,
      "비밀번호를 확인해주세요."
    );
  }
}

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
loginBtn.addEventListener("click", signIn);

document.querySelector(".sign-form").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    signIn();
  }
});
