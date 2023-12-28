
//e메일 관련
const email_input = document.querySelector('#email');
const email_error = document.querySelector('.email_error');

//비밀번호
const password_input = document.querySelector('#password');
const password_error = document.querySelector('.password_error');

//비밀번호 확인
const password2_input = document.querySelector('#password2');
const password_error2 = document.querySelector('.password_error2');

//이메일 정규식
const email_reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//패스워드 정규식
const password_reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;


//에러 지우는것
const remove_error = (remove_border, remove_text)=>{
  remove_border.classList.remove('input_line');
  remove_text.innerText ="";
};

//에러 발생시키는 함수
 const error_event = (span_el, input_border, error_text)=>{
  input_border.classList.add('input_line');
  span_el.innerText = error_text;
}

//이메일 정규식 확인
  function is_valid_email(email_input) {
    return new RegExp(email_reg).test(email_input);
  }

//패스워드 정규식 확인
  function is_valid_password(password_input){
    return new RegExp(password_reg).test(password_input)
  }

  // 눈모양 바꾸는 함수
  function eye_change(input, image_btn){
    if(input.type === 'password'){
      input.type = 'text'
      image_btn.src= " ../images/eye-on.svg";
      return;
    }
      input.type = 'password';
      image_btn.src= " ../images/eye-off.svg";
  }

  function login_btn_check(){
    if(email_input.value === "" && password_input.value === ""){
      email_error.innerText = '이메일을 확인해주세요';
      password_error.innerText = '비밀번호를 확인해주세요';
      return false;
    }
     remove_error(email_error, password_error);
     return true;
  };

  //api 연결 singin
  async function performUserSignIn(){
    try{
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        email : email_input.value,
        password : password_input.value,
      }),
    });
    console.log(response)
      if(response.status === 200){
        window.location.href = '../folder/folder.html';
      } else if(response.status === 400){
        login_btn_check();
      }
      } catch(error){
        console.log(error)
      }
    }

//api 연결 singup
async function performUserSignUp(){
  try{
    const response = await fetch ('https://bootcamp-api.codeit.kr/api/sign-up',{
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify({
        email : email_input.value,
        password : password_input.value,
      })
  })
  console.log(response);
  if(response.status === 200){
    window.location.href = '../folder/folder.html';
  }else if(response.status === 400){
    login_btn_check();
  }
  }catch(error){
    console.log(error)
  }
}

export{remove_error, error_event, is_valid_email, is_valid_password, eye_change,performUserSignIn, login_btn_check, performUserSignUp,
  email_input, email_error, password_input, password_error, password2_input,  password_error2
 }