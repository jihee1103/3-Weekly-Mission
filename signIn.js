import {default as common} from "./signModule.js";

const {
  submitButton,
  emailInput,
  passwordInput,
  eyeIcons,
  emailFocusin,
  emailFocusout,
  passwordFocusin,
  passwordFocusout,
  submit,
  toggleEyeIcons,
} = common;

//addEventListeners
emailInput.addEventListener('focusout', emailFocusout.bind(common));
emailInput.addEventListener('focusin', emailFocusin.bind(common));
passwordInput.addEventListener('focusout', passwordFocusout.bind(common));
passwordInput.addEventListener('focusin', passwordFocusin.bind(common));
submitButton.addEventListener('click', submit.bind(common));
eyeIcons.forEach(
    (icon) => icon.addEventListener('click', toggleEyeIcons.bind(common)));
