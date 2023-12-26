import {
  $passwordInput,
  $passwordEye,
  $repasswordInput,
  $rePasswordEye,
} from "./tags.js";
export { togglePasswordView };

function togglePasswordView() {
  if ($passwordInput.type === "password") {
    $passwordInput.type = "text";
    $passwordEye.src = "source/eye-on.png";
  } else {
    $passwordInput.type = "password";
    $passwordEye.src = "source/eye-off.png";
  }
  if ($repasswordInput) {
    $repasswordInput.type = $passwordInput.type;
    $rePasswordEye.src = $passwordEye.src;
  }
}
