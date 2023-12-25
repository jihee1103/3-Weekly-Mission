// 중복된 이메일 확인 요청 함수
export function checkDuplicateEmail(emailValue) {
  return fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailValue,
    }),
  });
}

// 회원가입 요청 함수
export function signUp(emailValue, passwordValue) {
  return fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  });
}
// 로그인 요청 함수
export function signIn(emailValue, passwordValue) {
  return fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  });
}
