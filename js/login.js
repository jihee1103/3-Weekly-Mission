import { userInfo, $eye_on, $eye_off, $form, $login_btn, $content_email, $content_password, $email_input, $password_input, outline, createMsg, $mv_login, $mv_signup, $content_rePassword, $rePassword_input, $re_eye_on, $re_eye_off } from '../js/common.js'



function outlineWriting(e){
  if (e.target === $email_input){
    outline($email_input, 'writing');  
  } else if (e.target === $password_input) {
    outline($password_input, 'writing');
  }
}

function emailIsValid() {
  const emailErrMsg = document.getElementById('emailErrMsg');
  emailErrMsg?.remove();

  if (!$email_input.value){
    createMsg($content_email, 'emailErrMsg', 'errorComment', '이메일을 입력하세요.');
    outline($email_input, 'error')
    return false 
  } else if ($email_input.value !== userInfo['email']){
    createMsg($content_email, 'emailErrMsg', 'errorComment', '이메일을 확인해주세요.');
    outline($email_input, 'error')
    return false 
  }
  return true
}

function passwordIsValid(){
  const passwordErrMsg = document.getElementById('passwordErrMsg');
  passwordErrMsg?.remove();

  if (!$password_input.value){
    createMsg($content_password, 'passwordErrMsg', 'errorComment', '비밀번호를 입력하세요.');
    outline($password_input, 'error')
    return false
  } else if ($password_input.value !== userInfo['password']){
    createMsg($content_password, 'passwordErrMsg', 'errorComment', '비밀번호를 확인해주세요.');
    outline($password_input, 'error')
    return false
  }
  return true
}

function infoIsVaild(){
  if(passwordIsValid() && emailIsValid()) {
    
      fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
      .then((response)=> {
        if(response.status === 200) {
          return response.json();
        }
      })
      .then((result)=>{
        localStorage.setItem('accessToken', result.data.accessToken)
        window.location.href = "/folder.html";      
      })
  } else {
    alert('회원정보가 일치하지 않습니다.')
  }
}

$email_input.addEventListener('focusin', outlineWriting);
$password_input.addEventListener('focusin', outlineWriting);

$email_input.addEventListener('focusout', emailIsValid);
$password_input.addEventListener('focusout', passwordIsValid);

$login_btn.addEventListener('click', infoIsVaild)
$form.addEventListener('keypress', function(e) {
  if (e.key === "Enter") {
    infoIsVaild();
  }
});
$mv_signup.addEventListener('click', function(){
  const tokenIsValid = localStorage.getItem('accessToken')
  if(tokenIsValid){
    window.location.href = "/folder.html";
  } else {
    window.location.href = "/signup.html";
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