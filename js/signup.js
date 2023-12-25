import { $form, $eye_on, $eye_off, $login_btn, $content_email, $content_password, $email_input, $password_input, outline, createMsg, userInfo, $mv_login, $mv_signup, $content_rePassword, $rePassword_input, $re_eye_on, $re_eye_off } from '../js/common.js'

function outlineWriting(e){
  if (e.target === $email_input){
    outline($email_input, 'writing');  
  } else if (e.target === $password_input) {
    outline($password_input, 'writing');
  } else if (e.target === $rePassword_input) {
    outline($rePassword_input, 'writing');
  }
}

function emailIsValid(e){

  const emailErrMsg = document.getElementById('emailErrMsg');
  emailErrMsg?.remove();

  const EmailInfo = {
    email: `${$email_input.value}`
  }
  
// 이메일 형식이 맞지 않을 경우, * 응답 객체 에러 메세지로 대체 가능해서 주석 처리 
  // const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!$email_input.value){
    createMsg($content_email, 'emailErrMsg', 'errorComment', '이메일을 입력하세요.');
    outline($email_input, 'error')
    return false
  } 
  else if (EmailInfo['email']) { // 서버에서 GET해서 조회하는 방법은 없는지? 

    fetch('https://bootcamp-api.codeit.kr/api/check-email',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(EmailInfo),
  })
  .then((response)=>response.json())
  .then((result)=> {
    console.log(result)
    if(result.error) {
      createMsg($content_email, 'emailErrMsg', 'errorComment', `${result.error.message}`);
      outline($email_input, 'error')
      return false
    } 
  })
  } 
  // 이메일 형식이 맞지 않을 경우, * 응답 객체 에러 메세지로 대체 가능해서 주석 처리 
  // else if (!emailRegex.test($email_input.value)){
  //   createMsg($content_email, 'emailErrMsg', 'errorComment',  '형식에 맞지 않는 이메일 입니다.');
  //   outline($email_input, 'error')
  //   return false
  // }
  return true
}

function passwordIsValid(){
  const passwordErrMsg = document.getElementById('passwordErrMsg');
  passwordErrMsg?.remove();

  if (!$password_input.value){
    createMsg($content_password, 'passwordErrMsg', 'errorComment', '비밀번호를 입력하세요.');
    outline($password_input, 'error')
    return false
  } else if ($password_input.value.length < 8){
    createMsg($content_password, 'passwordErrMsg', 'errorComment', '비밀번호를 8자리 이상 설정해주세요.');
    outline($password_input, 'error')
    return false
  }
  return true
}

function rePasswordIsValid(){
  const rePasswordErrMsg = document.getElementById('rePasswordErrMsg');
  rePasswordErrMsg?.remove();

  if(!$rePassword_input.value) {
    createMsg($content_rePassword, 'rePasswordErrMsg', 'errorComment', '비밀번호를 입력하세요.');
    outline($rePassword_input, 'error')
    return false
  } else if ($rePassword_input.value !== $password_input.value) {
    createMsg($content_rePassword, 'rePasswordErrMsg', 'errorComment', '비밀번호가 일치하지 않습니다.');
    outline($rePassword_input, 'error')
    outline($password_input, 'error')
    return false
  } 
  return true
}

function infoIsVaild(){
  if(rePasswordIsValid() && passwordIsValid() && emailIsValid()) {

    const newUser = {
      email: `${$email_input.value}`,
      password: `${$password_input.value}`
    }
    
    fetch('https://bootcamp-api.codeit.kr/api/sign-up',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser), 
    })
    .then((response)=>response.json())
    .then((result)=> {
      if(result.data.accessToken){ // 보안에 안 좋은 방법 같다
        localStorage.setItem('accessToken', result.data.accessToken)
        if(localStorage.getItem('accessToken')){
          alert('회원가입 성공')
          window.location.href = "/folder.html";
        }
      } 
    })
    .catch((error)=> {
      if(error){
        alert('양식에 맞춰 다시 작성해주세요.')
      }
    })
  } 
  // else {
  //   alert('양식에 맞춰 다시 작성해주세요.')
  // }
}

$email_input.addEventListener('focusin', outlineWriting);
$password_input.addEventListener('focusin', outlineWriting);
$rePassword_input.addEventListener('focusin', outlineWriting);

$email_input.addEventListener('focusout', emailIsValid);
$password_input.addEventListener('focusout', passwordIsValid);
$rePassword_input.addEventListener('focusout', rePasswordIsValid);

$login_btn.addEventListener('click', infoIsVaild)
$form.addEventListener('keypress', function(e) {
  if (e.key === "Enter") {
    infoIsVaild();
  }
})
$mv_login.addEventListener('click', function(){
  const tokenIsValid = localStorage.getItem('accessToken')
  if(tokenIsValid){
    window.location.href = "/folder.html";
  } else {
    window.location.href = "/login.html";
  }
});

$eye_on.addEventListener('click', function(e){
  e.target.classList.toggle('none');
  $eye_off.classList.toggle('none');
  $password_input.type = 'password';
})
$eye_off.addEventListener('click', function(e){
  e.target.classList.toggle('none');
  $eye_on.classList.toggle('none');
  $password_input.type = 'text';
})
$re_eye_on.addEventListener('click', function(e){
  e.target.classList.toggle('none');
  $re_eye_off.classList.toggle('none');
  $rePassword_input.type = 'password';
})
$re_eye_off.addEventListener('click', function(e){
  e.target.classList.toggle('none');
  $re_eye_on.classList.toggle('none');
  $rePassword_input.type = 'text';
})