import { BASE_URL } from '../instance/instance-api';

const GET_FOLDER_LINKS_DATA_API = '/api/users/1/links';

const getSortedFolderLinksData = async (folderId) => {
  try {
    const queryStrings = folderId === 'total' ? '' : `?folderId=${folderId}`;

    const response = await fetch(`${BASE_URL}${GET_FOLDER_LINKS_DATA_API}${queryStrings}`, {
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
    console.error('🚀 ~ file: getSortedFolderLinksData.js:11 ~ getSortedFolderLinksData ~ error:', error);
  }
};

export { getSortedFolderLinksData };
