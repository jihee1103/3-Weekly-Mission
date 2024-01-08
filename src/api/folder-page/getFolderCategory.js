import { BASE_URL } from '../instance/instance-api';

const GET_FOLDER_CATEGORY_API = '/api/users/1/folders';

const getFolderCategory = async () => {
  try {
    const response = await fetch(`${BASE_URL}${GET_FOLDER_CATEGORY_API}`, {
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
    console.error('🚀 ~ file: getFolderCategory.js:11 ~ getFolderCategory ~ error:', error);
  }
};

export { getFolderCategory };
