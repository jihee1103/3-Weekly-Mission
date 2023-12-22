import {
  loginElement,
  emailInputElement,
  passwdInputElement,
  users,
  emailErrorMentionElement,
  passwdErrorMentionElement,
  formElement,
  setErrorMentionElement,
} from "./signcommon.js";

function checkAccount() {
  setErrorMentionElement(
    true,
    emailInputElement,
    emailErrorMentionElement,
    "이메일을 확인해주세요."
  );
  setErrorMentionElement(
    true,
    passwdInputElement,
    passwdErrorMentionElement,
    "비밀번호를 확인해주세요."
  );
}

// 계정이 맞다면 사이트 연결 아니라면 오류메시지 출력
function signin() {
  fetch("https://bootcamp-api.codeit.kr/docs/api/sign-in", {
    method: "POST",
    body: JSON.stringify(users),
  }).then((response) =>{
    console.log(response.text());
  })
  // emailInputElement.value === users.email &&
  // passwdInputElement.value === users.password
  //   ? (location.href = "/folder")
  //   : checkAccount();
}

// 클릭 및 엔터 시 signin
loginElement.addEventListener("click", signin);
formElement.addEventListener("keydown", ({ key }) =>
  key === "Enter" ? signin() : ""
);
