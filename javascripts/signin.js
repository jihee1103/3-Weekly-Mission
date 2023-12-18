import {
  loginElement,
  emailInputElement,
  passwdInputElement,
  users,
  emailErrorMentionElement,
  passwdErrorMentionElement,
  formElement,
} from "./signcommon.js";

function accountCheck() {
  emailInputElement.classList.add("error-border");
  emailErrorMentionElement.innerText = "이메일을 확인해주세요.";
  emailErrorMentionElement.style.display = "block";
  passwdInputElement.classList.add("error-border");
  passwdErrorMentionElement.innerText = "비밀번호를 확인해주세요.";
  passwdErrorMentionElement.style.display = "block";
}

// 계정이 맞다면 사이트 연결 아니라면 오류메시지 출력
function signin() {
  emailInputElement.value === users.email &&
  passwdInputElement.value === users.passwd
    ? (location.href = "/folder")
    : accountCheck();
}

// 클릭 및 엔터 시 signin
loginElement.addEventListener("click", signin);
formElement.addEventListener("keydown", ({ key }) =>
  key === "Enter" ? signin() : ""
);
