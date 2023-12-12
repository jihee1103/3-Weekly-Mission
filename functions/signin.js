import {
  inputEmail,
  inputPassword,
  signinButton,
  inputSection,
  eyeIcon,
} from "./src/signin_tags.js";

import {
  errorEmailAlert,
  errorPasswordAlert,
} from "./src/signin_error_alert.js";

import { checkSignin, pressEnter } from "./src/signin_check.js";

import showHidePassword from "./src/show_hide.js";

inputEmail.addEventListener("focusout", errorEmailAlert);
inputPassword.addEventListener("focusout", errorPasswordAlert);

signinButton.addEventListener("click", checkSignin);
inputSection.addEventListener("keypress", pressEnter);

eyeIcon.addEventListener("click", showHidePassword);
