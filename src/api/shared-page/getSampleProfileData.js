import { BASE_URL } from '../instance/instance-api';

const GET_PROFILE_DATA_API = '/api/sample/user';

const getSampleProfileData = async () => {
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
    return await response.json();
  } catch (error) {
    console.error('🚀 ~ file: getSampleProfileData.js:11 ~ getSampleProfileData ~ error:', error);
  }
};

export { getSampleProfileData };
