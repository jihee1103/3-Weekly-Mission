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

export function storeAccessToken(accessToken) {
  localStorage.setItem('accessToken', accessToken);
}

// 페이지 로드 시 로컬 스토리지에 accessToken이 있는 경우 바로 페이지 이동
export function checkAndRedirect() {
  const storedAccessToken = localStorage.getItem('accessToken');
  if (storedAccessToken) {
    window.location.href = '../etc/folder.html';
  }
}
