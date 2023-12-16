document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.querySelector('#email');
  var passwordInput = document.querySelector('#password');
  var confirmPasswordInput = document.querySelector('#confirm-password');
  var emailError = document.querySelector('#email-error');
  var passwordError = document.querySelector('#password-error');
  var eyeButtons = document.querySelectorAll('.eye-button');

  function validateEmail() {
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

  function validatePassword() {
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

  eyeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var passwordField = button.previousElementSibling;
      var eyeIcon = button.querySelector('.eye-icon');
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = './images/eye.png';
      } else {
        passwordField.type = 'password';
        eyeIcon.src = './images/eye-off.svg';
      }
    });
  });

  emailInput.addEventListener('focusout', validateEmail);
  passwordInput.addEventListener('focusout', validatePassword);
  confirmPasswordInput.addEventListener('focusout', validateConfirmPassword);

  var loginButton = document.querySelector('.cta');
  loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    validateEmail();
    validatePassword();

    var correctEmail = 'test@codeit.com';
    var correctPassword = 'codeit101';

    if (emailInput.value === correctEmail && passwordInput.value === correctPassword) {
      window.location.href = '/folder';
    }
  });
});