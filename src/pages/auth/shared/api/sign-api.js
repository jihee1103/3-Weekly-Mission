const BASE_URL = 'https://bootcamp-api.codeit.kr';
const SIGNIN_API = '/api/sign-in';
const SIGNUP_API = '/api/sign-up';
const EMAIL_DUPLICATION_CHECK_API = '/api/check-email';
/**
 *
 * @param {string} email
 */
const checkEmailDuplication = async email => {
  try {
    const response = await fetch(`${BASE_URL}${EMAIL_DUPLICATION_CHECK_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    return response;
  } catch (error) {
    console.log('여기로 넘어옴.');
    console.dir(new Error('network error'));
  }
};

/**
 *
 * @param {{email: string, password: string}} param0
 */
const siginIn = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}${SIGNIN_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  } catch (error) {
    console.dir(new Error('network error'));
  }
};

/**
 *
 * @param {{email: string, password: string}} param0
 */
const signUp = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}${SIGNUP_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  } catch (error) {
    console.dir(new Error('network error'));
  }
};

export { checkEmailDuplication, siginIn, signUp };
