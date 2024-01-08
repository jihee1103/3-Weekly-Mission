import { BASE_URL } from '../instance/instance-api';

const GET_USER_FOLDERS_API = '/api/sample/folder';

const getSampleUserFolders = async () => {
  try {
    const response = await fetch(`${BASE_URL}${GET_USER_FOLDERS_API}`, {
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
    console.error('🚀 ~ file: getSampleUserFolders.js:18 ~ getSampleUserFolders ~ error:', error);
  }
};

export { getSampleUserFolders };
