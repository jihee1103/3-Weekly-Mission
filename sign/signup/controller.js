import { ERROR_MESSAGES, API, EMAIL_REGEX, PASSWORD_REGEX } from '../constants.js';

const getErrorMessage = (errCode) => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';
const getAPI = (apiCode) => API[apiCode];

export default class SignUpController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    if (this.model.hasToken()) {
      location.href = '/folder.html';
      return;
    }

    this.view.emailInput.addEventListener('focusout', () => this.handleEmailInputFocusout());
    this.view.passwordInput.addEventListener('focusout', () => this.handlePasswordInputFocusout());
    this.view.passwordConfirmInput.addEventListener('focusout', () =>
      this.handlePasswordConfirmInputFocusout(),
    );
    this.view.eyeIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => this.view.handleEyeIconClick(e));
    });
    this.view.formElement.addEventListener('submit', (e) => this.handleFormSubmit(e));
  }

  handleEmailInputFocusout() {
    const emailValue = this.view.emailInput.value;

    if (!emailValue) {
      this.view.showErrorMessage(this.view.emailInput, getErrorMessage('EMAIL_REQUIRED'));
      return false;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      this.view.showErrorMessage(this.view.emailInput, getErrorMessage('INVALID_EMAIL'));
      return false;
    }

    this.view.removeErrorMessage(this.view.emailInput);
    return true;
  }

  handlePasswordInputFocusout() {
    const passwordValue = this.view.passwordInput.value;

    if (!passwordValue) {
      this.view.showErrorMessage(this.view.passwordInput, getErrorMessage('PASSWORD_REQUIRED'));
      return false;
    }

    if (PASSWORD_REGEX.test(passwordValue) && passwordValue.length >= 8) {
      this.view.showErrorMessage(this.view.passwordInput, getErrorMessage('INVALID_PASSWORD'));
    }

    this.view.removeErrorMessage(this.view.passwordInput);
    return true;
  }

  handlePasswordConfirmInputFocusout() {
    const passwordConfirmValue = this.view.passwordConfirmInput.value;

    if (!passwordConfirmValue) {
      this.view.showErrorMessage(
        this.view.passwordConfirmInput,
        getErrorMessage('PASSWORD_CONFIRM_REQUIRED'),
      );
      return false;
    }

    if (passwordConfirmValue !== this.view.passwordInput.value) {
      this.view.showErrorMessage(
        this.view.passwordConfirmInput,
        getErrorMessage('INVALID_PASSWORD_CONFIRM'),
      );
      return false;
    }

    this.view.removeErrorMessage(this.view.passwordConfirmInput);
    return true;
  }

  async handleFormSubmit(e) {
    e.preventDefault();

    const emailValue = this.view.emailInput.value;
    const passwordValue = this.view.passwordInput.value;
    const userEmail = {
      email: emailValue,
    };
    const user = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const emailDuplicateCheckResponse = await fetch(getAPI('EMAIL_DUPLICATE_CHECK_API'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userEmail),
      });

      if (emailDuplicateCheckResponse.status === 409) {
        this.view.showErrorMessage(this.view.emailInput, getErrorMessage('DUPLICATE_EMAIL'));
        return;
      }

      const signUpResponse = await fetch(getAPI('SIGN_UP_API'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!signUpResponse.ok) {
        this.view.showErrorMessage(this.view.emailInput, getErrorMessage('EMAIL_CHECK_FAILED'));
        this.view.showErrorMessage(
          this.view.passwordInput,
          getErrorMessage('PASSWORD_CHECK_FAILED'),
        );
        this.view.showErrorMessage(
          this.view.passwordConfirmInput,
          getErrorMessage('PASSWORD_CONFIRM_CHECK_FAILED'),
        );
        return;
      }

      this.model.saveTokenInCookie(signUpResponse);
      location.href = '/folder.html';
    } catch (error) {
      console.error('회원가입 에러:', error.message);
      alert(getErrorMessage('SIGN_UP_FAILED'));
    }
  }
}
