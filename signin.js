const eInput = document.getElementById('email');
const pInput = document.getElementById('password');
const emailErrMsg = document.getElementById('email-err-msg');
const passwordErrMsg = document.getElementById('password-err-msg');
const signinbtn = document.querySelector('#signin-btn');
const eChecker = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/; 


function emailCheck(email) {
    if(eChecker.test(email) === false) {
        return false; 
    } else { 
        return true; 
    }
}

function printEmailMsg(e){
    emailErrMsg.textContent = '';
    if(eInput.value == ''){
        emailErrMsg.textContent = '이메일을 입력해주세요.';
        return false;
    } else {
        if(emailCheck(eInput.value) == false) {
            emailErrMsg.textContent = '올바른 이메일 주소가 아닙니다.';
            return false;
        }
    }
    return true;
}

function printPasswordMsg(e){
    passwordErrMsg.textContent = '';
    if(pInput.value === '') {
        passwordErrMsg.textContent = '비밀번호를 입력해주세요.';
    }
}

signinbtn.addEventListener('click', vaildSubmit);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        vaildSubmit();
    }
});
function vaildSubmit(e) {
    if (e) {
        e.preventDefault();
    }
    
    if(eInput.value === 'test@codeit.com' && pInput.value === 'codeit101'){
        window.location.href = "/folder";
    } else {
        emailErrMsg.textContent = '';
        emailErrMsg.textContent = '이메일을 확인해주세요.';
        passwordErrMsg.textContent = '';
        passwordErrMsg.textContent = '비밀번호를 확인해주세요.';
    }
}




eInput.addEventListener('focusout', printEmailMsg);
pInput.addEventListener('focusout', printPasswordMsg);
