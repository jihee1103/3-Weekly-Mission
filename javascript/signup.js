const email = document.querySelector('#email')
const email_error = document.querySelector('.email_error')
const password = document.querySelector('#password')
const password_error = document.querySelector('.password_error')
const password2 = document.querySelector('#password2')
const password_error2 = document.querySelector('.password_error2')
const createbtn = document.querySelector('.createbtn')
const input_line = document.querySelector('.input_line')

// function email_check(e){
//     if(email.value == ""){
  // email.classList.add('input_line');
//     email_error.innerHTML='이메일을 입력해주세요'
//   }
// }
// email.addEventListener('blur', email_check)

// email.addEventListener('blur', function(){
//   if(email.value == ""){
//         email_error.innerHTML='이메일을 입력해주세요'
//      }
//   }
// )

// 이메일 입력안하면 경고뜨는 함수

// function email_contains(){
//   if(!email.value.includes('@')){
  // email.classList.add('input_line');
//     email_error.innerHTML='올바른 이메일 주소가 아닙니다'
//   }
// }
// email.addEventListener('blur', email_contains)

// email.addEventListener('blur', function(){
//   if(!email.value.includes('@')){
//       email_error.innerHTML='올바른 이메일 주소가 아닙니다'
//     }
//   }
// )

//@ 안쓰면 경고뜨는 함수

function email_compare(){
  if(email.value === 'test@codeit.com'){
    email.classList.add('input_line');
    email_error.innerHTML ='이미 사용 중인 이메일입니다.';
  }
}
email.addEventListener('blur', email_compare)

// email.addEventListener('blur', function(e){
//   if(email.value === 'test@codeit.com'){
//     email.classList.add('input_line');
//     email_error.innerHTML ='이미 사용 중인 이메일입니다.'
//     }
//   }
// )

//이메일 비교해서 틀린거 알려주는 함수

// function password_check(){
//   if(password.value == ""){
//     password.classList.add('input_line');
//     password_error.innerHTML = '비밀번호를 입력해주세요'
//   }
// }
// password.addEventListener('blur', password_check)

// 비밀번호 없으면 경고해주는 함수

function password_compare(){
  if(password.value !== password2.value){
    password_error2.innerHTML = '비밀번호가 일치하지 않아요'
    password2.classList.add('input_line')
  }
}
password2.addEventListener('blur', password_compare)