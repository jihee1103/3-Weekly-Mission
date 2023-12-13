function showAndHidePassword(e) {
  if (
    e.target.previousElementSibling &&
    e.target.previousElementSibling.tagName === "INPUT"
  ) {
    const eyeIcon = e.target;
    if (eyeIcon.previousElementSibling.type === "password") {
      eyeIcon.previousElementSibling.type = "text";
      eyeIcon.src = "images/eye-on.svg";
      eyeIcon.alt = "눈 아이콘";
    } else {
      eyeIcon.previousElementSibling.type = "password";
      eyeIcon.src = "images/eye-off.svg";
      eyeIcon.alt = "눈에 빗금친 아이콘";
    }
  }
}

export default showAndHidePassword;
