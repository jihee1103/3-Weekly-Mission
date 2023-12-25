const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const passwordCheckError = document.querySelector("#password-check-error");
const signBtn = document.querySelector(".sign-btn");

if (localStorage.accessToken) {
  window.location.href = "folder.html";
}

async function checkEmail() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput.value }),
    }
  );

  if (response.status === 409) {
    return validateInput(emailInput, emailError, "이미 사용중인 이메일입니다.");
  }

  return validateInput(emailInput, emailError, "");
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
  checkEmail();

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

function confirmPassword() {
  if (!passwordCheckInput.value) {
    return validateInput(
      passwordCheckInput,
      passwordCheckError,
      "비밀번호를 입력해주세요."
    );
  }

  if (passwordCheckInput.value !== passwordInput.value) {
    return validateInput(
      passwordCheckInput,
      passwordCheckError,
      "비밀번호가 일치하지 않습니다."
    );
  }

  return validateInput(passwordCheckInput, passwordCheckError, "");
}

async function submit() {
  if (validateEmail() && validatePassword() && confirmPassword()) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
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
      alert("회원가입이 완료되었습니다.");
      window.location.href = "/folder.html";
    }
  }
}

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
passwordCheckInput.addEventListener("focusout", confirmPassword);
signBtn.addEventListener("click", submit);

document.querySelector(".sign-form").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    submit();
  }
});
