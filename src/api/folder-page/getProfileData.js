import { BASE_URL } from '../instance/instance-api';

const GET_PROFILE_DATA_API = '/api/users/1';

const getProfileData = async () => {
  try {
    const response = await fetch(`${BASE_URL}${GET_PROFILE_DATA_API}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('🚀 ~ file: getProfileData.js:11 ~ getProfileData ~ error:', error);
  }
};

export { getProfileData };
