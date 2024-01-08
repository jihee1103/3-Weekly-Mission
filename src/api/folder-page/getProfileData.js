import { BASE_URL } from '../instance/instance-api';

const GET_PROFILE_DATA_API = '/api/users/1';

const getProfileData = async () => {
  try {
    // const response = await fetch(`${BASE_URL}${GET_PROFILE_DATA_API}`, {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = response.json();
    console.dir(data);
    return data;
  } catch (error) {
    console.error('🚀 ~ file: getProfileData.js:11 ~ getProfileData ~ error:', error);
  }
};

export { getProfileData };
