export function validateEmail(emailInput, emailError) {
  const EMAIL = emailInput.value;
  if (EMAIL.length === 0) {
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
    return;
  }

  if (!EMAIL.includes('@')) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
    return;
  }

  emailError.style.display = 'none';
  emailInput.classList.remove('input-error');
}

export function validatePassword(passwordInput, passwordError) {
  const PASSWORD = passwordInput.value;
  if (PASSWORD.length === 0) {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordError.style.display = 'block';
    passwordInput.classList.add('input-error');
  } else {
    passwordError.style.display = 'none';
    passwordInput.classList.remove('input-error');
  }
}

export function togglePasswordVisibility(button) {
  const PASSWORD_FIELD = button.previousElementSibling;
  const EYE_ICON = button.querySelector('.eye-icon');
  if (PASSWORD_FIELD.type === 'password') {
    PASSWORD_FIELD.type = 'text';
    EYE_ICON.src = './images/eye.png';
  } else {
    PASSWORD_FIELD.type = 'password';
    EYE_ICON.src = './images/eye-off.svg';
  }
}
