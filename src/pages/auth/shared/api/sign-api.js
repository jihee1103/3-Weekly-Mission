const BASE_URL = 'https://bootcamp-api.codeit.kr';
const SIGNIN_API = '/api/sign-in';
const SIGNUP_API = '/api/sign-up';
const EMAIL_DUPLICATION_CHECK_API = '/api/check-email';

/**
 * 공통으로 사용할 fetch 요청 함수
 * @param {string} endpoint
 * @param {RequestInit} options
 * @returns {Promise<Response>}
 */
const fetchRequest = async (endpoint, options) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    return response;
  } catch (error) {
    console.log('네트워크 에러:', error);
    throw new Error('네트워크 에러');
  }
};

/**
 * 이메일 중복 체크
 * @param {string} email
 * @returns {Promise<Response>}
 */
const checkEmailDuplication = async email => {
  return fetchRequest(EMAIL_DUPLICATION_CHECK_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
};

/**
 * 회원 가입
 * @param {{email: string, password: string}} param0
 * @returns {Promise<Response>}
 */
const signUp = async ({ email, password }) => {
  return fetchRequest(SIGNUP_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
};

/**
 * 로그인
 * @param {{email: string, password: string}} param0
 * @returns {Promise<Response>}
 */
const signIn = async ({ email, password }) => {
  return fetchRequest(SIGNIN_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
};

export { checkEmailDuplication, signIn, signUp };
