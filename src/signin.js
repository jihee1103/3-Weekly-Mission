const inputEmail = document.querySelector('#email-input');
const inputPassword = document.querySelector('#password-input');
const emailAlert = document.querySelector('#email-alert');
const passwordAlert = document.querySelector('#password-alert');

function showEmailAlert() {
  if (inputEmail.value.includes('@')) {
    emailAlert.style.display = 'NONE';
  } else {
    if (!inputEmail.value) {
      emailAlert.textContent = '이메일을 입력해 주세요.';
    } else if (!inputEmail.value.includes('@')) {
      emailAlert.textContent = '올바른 이메일 주소가 아닙니다.';
    }
    emailAlert.style.display = 'INLINE';
  }
}

function showPasswordAlert() {
  if (inputPassword.value) {
    passwordAlert.style.display = 'NONE';
  } else {
    passwordAlert.textContent = '비밀번호를 입력해 주세요.';
    passwordAlert.style.display = 'INLINE';
  }
}

inputEmail.addEventListener('focusout', showEmailAlert);
inputPassword.addEventListener('focusout', showPasswordAlert);
