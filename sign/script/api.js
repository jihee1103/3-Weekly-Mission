export async function handleLoginAsync(emailValue, passwordValue) {
  const user = {
    email: emailValue,
    password: passwordValue,
  };

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const responseData =
      response ??
      (function () {
        alert('No Response');
        throw new Error('No Response');
      })();

    const data = await responseData.json();
    const token = data.token;
    localStorage.setItem('token', token);

    window.location.href = '/folder.html';
  } catch (error) {
    console.error('로그인 에러:', error.message);
    alert('로그인에 실패했습니다. 다시 시도해주세요.');
  }
}
