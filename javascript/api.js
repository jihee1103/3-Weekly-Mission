// 중복된 이메일 확인 요청 함수
export async function checkDuplicateEmail(emailValue) {
  try {
    const response = await fetch(
      'https://bootcamp-api.codeit.kr/api/check-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailValue,
        }),
      },
    );

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('이메일 중복 확인 요청 실패');
  }
}

// 회원가입 요청 함수
export async function signUp(emailValue, passwordValue) {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('회원가입 요청 실패');
  }
}

// 로그인 요청 함수
export async function signIn(emailValue, passwordValue) {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('로그인 요청 실패');
  }
}
