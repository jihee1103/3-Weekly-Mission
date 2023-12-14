import {
  passwordInp,
  passwordEye,
  rePasswordInp,
  rePasswordEye,
} from "./tags.js";
export { togglePasswordView };

function togglePasswordView() {
  if (passwordInp.type === "password") {
    passwordInp.type = "text";
    passwordEye.src = "source/eye-on.png";
  } else {
    passwordInp.type = "password";
    passwordEye.src = "source/eye-off.png";
  }
  if (rePasswordInp) {
    rePasswordInp.type = passwordInp.type;
    rePasswordEye.src = passwordEye.src;
  }
}
