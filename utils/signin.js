import {
  $inputEmail,
  $inputPassword,
  $loginButton,
  $eyeIcon,
  checkInputEmail,
  checkInputPassword,
  toggleDisplayPassword,
  requestSign,
  displayCheckEmailPassword,
  saveAccessToken,
} from "./sign.js";

// 로그인 할 때, 이메일, 비밀번호 검사
async function checkLogin(e) {
  e.preventDefault();
  try {
    const inputEmailPassword = {
      email: $inputEmail.value,
      password: $inputPassword.value,
    };
    // request 요청
    const response = await requestSign(
      "https://bootcamp-api.codeit.kr/api/sign-in",
      inputEmailPassword
    );
    // 리퀘스트 성공 시
    if (response.status === 200) {
      // 로컬 스토리지에 accessToken 저장
      saveAccessToken(response);
      // folder page로 이동
      location.href = "folder.html";
      // 리퀘스트 실패 시
    } else if (response.status === 400) displayCheckEmailPassword();
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
}

// 로그인 이벤트 리스너 추가
if ($loginButton) $loginButton.addEventListener("click", checkLogin);
$eyeIcon.forEach((icon) => {
  icon.addEventListener("click", toggleDisplayPassword);
});

$inputEmail.addEventListener("focusout", checkInputEmail);
$inputPassword.addEventListener("focusout", checkInputPassword);
