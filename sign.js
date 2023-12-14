/*
1 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해주세요.” 에러 메세지를 보입니다.
1 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
1 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
1 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다.
2 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해주세요.” 에러 메세지를 보입니다.
2 input에 에러와 관련된 디자인은 좌측 상단의 Components 영역에 있는 디자인을 참고해 주세요.
2 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.

*/
const form = document.querySelector('form');
const button = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const TEST_EMAIL = "test@codeit.com";
const TEST_PASSWORD = "codeit101";

//only for signup.html -> 이후 과제에서 사용예정
// const passwordConfirm = document.querySelector('#password-conformation');

//이메일 유효성 검사
function emailValidation(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

//이메일 Focusout 핸들러
function emailFocusout(e) {
  const emailValue = emailInput.value;
  console.log(emailValue);
  //값이 없을경우 에러메세지
  if (emailValue === "") {
    alert("이메일을 입력해주세요."); //TODO: 에러메세지 디자인
  }
  //형식이 틀릴경우 경우 에러메세지
  else if (!emailValidation(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다."); //TODO: 에러메세지 디자인
  }
}

function passwordFocusout(e) {
  if (passwordInput.value === "") {
    alert("비밀번호를 입력해주세요."); //TODO: 에러메세지 디자인
  }
}

function submit(e) {
  e.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  if (emailValue === TEST_EMAIL && passwordValue === TEST_PASSWORD) {
    alert("로그인 성공");
  }
}

//비밀번호 유효성 검사
emailInput.addEventListener('focusout', emailFocusout);
passwordInput.addEventListener('focusout', passwordFocusout);





