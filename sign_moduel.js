export function validateEmail(emailInput, emailError) {
  var email = emailInput.value;
  if (email.length === 0) {
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
  } else if (!email.includes('@')) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
  } else {
    emailError.style.display = 'none';
    emailInput.classList.remove('input-error');
  }
}

export function validatePassword(passwordInput, passwordError) {
  var password = passwordInput.value;
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
  var passwordField = button.previousElementSibling;
  var eyeIcon = button.querySelector('.eye-icon');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.src = './images/eye.png';
  } else {
    passwordField.type = 'password';
    eyeIcon.src = './images/eye-off.svg';
  }
}
