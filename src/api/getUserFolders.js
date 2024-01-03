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
      throw new Error('no profile data');
    }
    const data = await response.json();
    console.dir(data);
    return data;
  } catch (error) {
    console.log('🚀 ~ file: getUserFolders.js:18 ~ getUserFolders ~ error:', error);
  }
};

export { getUserFolders };
