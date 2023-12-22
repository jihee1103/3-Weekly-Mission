export function validateEmail(emailInput, emailError) {
  const email = emailInput.value;
  if (email.length === 0) {
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
    return;
  }

  if (!email.includes('@')) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
    return;
  }

  emailError.style.display = 'none';
  emailInput.classList.remove('input-error');
}

export function validatePassword(passwordInput, passwordError) {
  const password = passwordInput.value;
  if (password.length === 0) {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordError.style.display = 'block';
    passwordInput.classList.add('input-error');
  } else {
    passwordError.style.display = 'none';
    passwordInput.classList.remove('input-error');
  }
}

export function togglePasswordVisibility(button) {
  const passwordField = button.previousElementSibling;
  const eyeIcon = button.querySelector('.eye-icon');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.src = './images/eye.png';
  } else {
    passwordField.type = 'password';
    eyeIcon.src = './images/eye-off.svg';
  }
}
