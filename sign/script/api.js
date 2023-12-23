export async function Send registered email verification request() {
  
}

export async function verifyDuplicateUser(emailValue) {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailValue),
    });
    const deserializedResponseData = await response.json();

    if (deserializedResponseData.duplicate) {
      alert('중복된 이메일입니다.');
    }
  } catch (error) {
    console.error('회원가입 에러:', error.message);
    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
  }
}
