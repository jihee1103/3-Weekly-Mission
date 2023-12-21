import {
  $inputEmail,
  $inputPassword,
  $inputEmailBox,
  $inputPasswordBox,
  $loginButton,
  $eyeIcon,
  displayLoginError,
  removeLoginError,
  checkInputEmail,
  checkInputPassword,
  toggleDisplayPassword,
  displayCheckEmailPassword,
} from "./sign.js";

// 로그인 할 때, 이메일, 비밀번호 검사
async function checkLogin(e) {
  e.preventDefault();

  const inputUser = {
    email: $inputEmail.value,
    password: $inputPassword.value,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputUser),
    });

    if (response.status === 200) location.href = "folder.html";
    else if (response.status === 400) displayCheckEmailPassword();
  } catch (error) {
    console.log(error);
  }
}

// 로그인 이벤트 리스너 추가
if ($loginButton) $loginButton.addEventListener("click", checkLogin);
$eyeIcon.forEach((icon) => {
  icon.addEventListener("click", toggleDisplayPassword);
});

$inputEmail.addEventListener("focusout", checkInputEmail);
$inputPassword.addEventListener("focusout", checkInputPassword);
