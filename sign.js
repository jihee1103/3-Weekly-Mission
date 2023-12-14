/*
1 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
2 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해주세요.” 에러 메세지를 보입니다.
2 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.

-심화
눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
*/
const form = document.querySelector('form');
const button = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const TEST_EMAIL = "test@codeit.com";
const TEST_PASSWORD = "codeit101";
const errorMapper = {
  emailVoidError: "이메일을 입력해주세요.",
  emailInvalidError: "올바른 이메일 주소가 아닙니다.",
  passwordVoidError: "비밀번호를 입력해주세요.",
  emailWrongError: "이메일을 확인해주세요.",
  passwordWrongError: "비밀번호를 확인해주세요."
}

//only for signup.html -> 이후 과제에서 사용예정
// const passwordConfirm = document.querySelector('#password-conformation');

//이메일 유효성 검사
function emailFocusin() {
  const alertMessage = document.querySelector('.input-box .alert');
  if (alertMessage) {
    alertMessage.remove();
  }
}

function emailValidation(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

//이메일 Focusout 핸들러
function emailFocusout() {
  const value = emailInput.value;
  //값이 없을경우 에러메세지
  if (value === "") {
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert');
    alertMessage.textContent = errorMapper.emailVoidError;
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "14px";
    alertMessage.style.position = "relative";
    alertMessage.style.top = "-10px";
    emailInput.parentElement.append (alertMessage);
  }
  else if (!emailValidation(value)) {
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert');
    alertMessage.textContent = errorMapper.emailInvalidError;
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "14px";
    emailInput.parentElement.append(alertMessage);
  }
}

function passwordFocusin() {
  const alertMessage = document.querySelector('.password-box .alert');
  if (alertMessage) {
    alertMessage.remove();
  }
}

function passwordFocusout() {
  if (passwordInput.value === "") {
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert');
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "14px";
    alertMessage.textContent = errorMapper.passwordVoidError;
    passwordInput.parentElement.append(alertMessage);
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

//addEventListeners
emailInput.addEventListener('focusout', emailFocusout);
emailInput.addEventListener('focusin', emailFocusin);
passwordInput.addEventListener('focusout', passwordFocusout);
passwordInput.addEventListener('focusin', passwordFocusin);





