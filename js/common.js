const $eye_on = document.querySelector('#eye-on');
const $eye_off = document.querySelector('#eye-off');

const $content_email = document.querySelector('.email');
const $content_password = document.querySelector('.password');
const $email_input = document.querySelector('#email');
const $password_input = document.querySelector('#pw');
const $content_rePassword = document.querySelector('.re-password');
const $rePassword_input = document.querySelector('#re-pw');
const $re_eye_on = document.querySelector('#re-eye-on');
const $re_eye_off = document.querySelector('#re-eye-off');
const $form = document.querySelector('#login_form');
const $login_btn = document.querySelector('.login');
const $mv_login = document.querySelector('.mv-login');
const $mv_signup = document.querySelector('.mv-signup');

const userInfo = { 
  email: 'test@codeit.com',
  password: 'sprint101',
}

function outline(inputEl, option){
  inputEl.className = option;
}

function createMsg(inputEl, msgId, msgCls, msgText) {
  const msg = document.createElement('div');
  msg.id = msgId;
  msg.className = msgCls;
  msg.textContent = msgText;
  inputEl.append(msg);
}

function movePage(page){
  const tokenIsValid = localStorage.getItem('accessToken')
  if(tokenIsValid){
    window.location.href = "/folder.html";
  } else {
    window.location.href = `/${page}.html`;
  }
}

export { $eye_on, $eye_off, $form, $login_btn, userInfo, $content_email, $content_password, $email_input, $password_input, $mv_login, $mv_signup, $content_rePassword, $rePassword_input, $re_eye_on, $re_eye_off, outline, createMsg };