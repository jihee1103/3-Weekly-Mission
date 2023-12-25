export default class SignView {
  constructor() {
    this.formElement = document.getElementById('form-list');
    this.emailInput = document.getElementById('email-input');
    this.passwordInput = document.getElementById('password-input');
    this.passwordConfirmInput = document.getElementById('password-confirm-input');
    this.eyeIcons = document.querySelectorAll('.eye-icon');
  }

  showErrorMessage(tag, errorMessage) {
    const target = tag.parentElement.querySelector('.error-message');
    const inputBorder = target.parentElement.querySelector('.input');

    inputBorder.classList.add('error-border');
    target.textContent = errorMessage;
  }

  removeErrorMessage(tag) {
    const target = tag.parentElement.querySelector('.error-message');
    const inputBorder = target.parentElement.querySelector('.input');

    inputBorder.classList.remove('error-border');
    target.textContent = '';
  }

  handleEyeIconClick(e) {
    const eyeIcon = e.target;
    const input = eyeIcon.parentElement.querySelector('.input');

    input.type = input.type === 'password' ? 'text' : 'password';
    eyeIcon.src = input.type === 'password' ? '../icons/eye-off.svg' : '../icons/eye-on.svg';
  }
}
