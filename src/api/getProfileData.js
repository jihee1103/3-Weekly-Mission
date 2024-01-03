import { BASE_URL } from './instance/instance-api';
const GET_PROFILE_DATA_API = '/api/sample/user';

const getProFileData = async () => {
  try {
    const response = await fetch(`${BASE_URL}${GET_PROFILE_DATA_API}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('no profile data');
    }
    const data = await response.json();
    console.dir(data);
    return data;
  } catch (error) {
    console.log('🚀 ~ file: getProfileData.js:11 ~ getProFileData ~ error:', error);
  }
};

export { getProFileData };
