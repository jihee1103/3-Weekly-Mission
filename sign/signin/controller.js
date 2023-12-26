import { ERROR_MESSAGES, API, EMAIL_REGEX } from '../constants.js';

export default class SignInController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    if (this.model.hasToken()) {
      location.replace('/folder.html');
      return;
    }

    this.view.emailInput.addEventListener('focusout', () => this.handleEmailInputFocusout());
    this.view.passwordInput.addEventListener('focusout', () => this.handlePasswordInputFocusout());
    this.view.eyeIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => this.view.handleEyeIconClick(e));
    });
    this.view.formElement.addEventListener('submit', (e) => this.handleFormSubmit(e));
  }

  handleEmailInputFocusout() {
    const emailValue = this.view.emailInput.value;

    if (!emailValue) {
      this.view.showEmailErrorMessage(ERROR_MESSAGES.EMAIL_REQUIRED);
      return false;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      this.view.showEmailErrorMessage(ERROR_MESSAGES.INVALID_EMAIL);
      return false;
    }

    this.view.removeEmailErrorMessage();
    return true;
  }

  handlePasswordInputFocusout() {
    const passwordValue = this.view.passwordInput.value;

    if (!passwordValue) {
      this.view.showPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_REQUIRED);
      return false;
    }

    this.view.removePasswordErrorMessage();
    return true;
  }

  async handleFormSubmit(e) {
    e.preventDefault();

    const emailValue = this.view.emailInput.value;
    const passwordValue = this.view.passwordInput.value;
    const user = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const signInResponse = await fetch(API.SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!signInResponse.ok) {
        this.view.showEmailErrorMessage(ERROR_MESSAGES.EMAIL_CHECK_FAILED);
        this.view.showPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_CHECK_FAILED);
        return;
      }

      this.model.saveTokenInCookie(signInResponse);
      location.replace('/folder.html');
    } catch (error) {
      console.error('로그인 에러:', error.message);
      alert(ERROR_MESSAGES.SIGN_IN_FAILED);
    }
  }
}
