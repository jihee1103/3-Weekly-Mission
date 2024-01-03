import { BASE_URL } from './instance/instance-api';
const GET_USER_FOLDERS_API = '/api/sample/folder';

const getUserFolders = async () => {
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
    console.error('🚀 ~ file: getUserFolders.js:18 ~ getUserFolders ~ error:', error);
  }
};

export { getUserFolders };
