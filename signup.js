const signupEmail = document.getElementById("signup-email");
const errEmail = document.getElementById("err-email");

async function checkDuplicatedEmail() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: signupEmail.value }),
    }
  );

  if (response.status === 409) {
    console.log(response);
    validateInput(signupEmail, errEmail, "이미 사용중인 이메일입니다.");
    console.log(response.status, "사용중");
    return false;
  } else {
    console.log(response);
    validateInput(signupEmail, errEmail, "");
    return true;
  }
}
signupEmail.addEventListener("focusout", checkDuplicatedEmail);

function validateEmail(emailInput) {
  if (!emailInput.value) {
    // 빈칸일 때
    return validateInput(emailInput, errEmail, "이메일을 입력해주세요.");
  }
  if (!emailRegex.test(emailInput.value)) {
    // 이메일 형식 오류일 때
    return validateInput(
      emailInput,
      errEmail,
      "올바른 이메일 주소가 아닙니다."
    );
  }

  // 4번째줄 checkDuplicatedEmail() 함수 처리를 여기서 하려고 했는데 안돼서
  // addEventListener에 추가함.. 왜 안되는건지 이유가 궁금합니다
  // if (!isDuplicatedEmail()) {
  //   return validateInput(emailInput, errEmail, "이미 사용중인 이메일입니다.");
  // }

  return validateInput(emailInput, errEmail, "");
}
signupEmail.addEventListener("focusout", function () {
  validateEmail(this);
});

const signupPassword = document.getElementById("signup-password");
const errPassword = document.getElementById("err-password");

function validatePassword(passwordInput) {
  if (!passwordInput.value) {
    // 빈칸일 때
    return validateInput(
      passwordInput,
      errPassword,
      "비밀번호를 입력해주세요."
    );
  }

  if (!pwdRegex.test(passwordInput.value)) {
    //8글자 미만 or 문자열만 있거나 숫자만 있는 경우
    return validateInput(
      passwordInput,
      errPassword,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  }

  return validateInput(passwordInput, errPassword, "");
}
signupPassword.addEventListener("focusout", function () {
  validatePassword(this);
});

const signupRepassword = document.getElementById("signup-repassword");
const errRepassword = document.getElementById("err-repassword");

function validateRepassword(repasswordInput) {
  if (!repasswordInput.value) {
    // 빈칸일 때
    return validateInput(
      repasswordInput,
      errRepassword,
      "비밀번호를 입력해주세요."
    );
  }

  if (!pwdRegex.test(repasswordInput.value)) {
    //8글자 미만 or 문자열만 있거나 숫자만 있는 경우
    return validateInput(
      repasswordInput,
      errRepassword,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  }

  if (signupPassword.value !== repasswordInput.value) {
    //비밀번호가 일치하지 않을 때
    return validateInput(
      repasswordInput,
      errRepassword,
      "비밀번호가 일치하지 않아요."
    );
  }

  return validateInput(repasswordInput, errRepassword, "");
}
signupRepassword.addEventListener("focusout", function () {
  validateRepassword(this);
});

async function submit() {
  if (
    validateEmail(signupEmail) &&
    validatePassword(signupPassword) &&
    validateRepassword(signupRepassword) &&
    checkDuplicatedEmail()
  ) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signupEmail.value,
        password: signupPassword.value,
      }),
    });

    if (response.status === 200) {
      alert("회원가입 성공");
      const result = response.json();
      localStorage.setItem("accessToken", result.ACCESS_TOKEN);
      const link = "folder.html";
      window.location.href = link;
    }
  }
}
const button = document.getElementById("signup-btn");
button.addEventListener("click", submit);

// 키보드 엔터로 제출
document
  .getElementById("signup-form")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submit();
    }
  });
