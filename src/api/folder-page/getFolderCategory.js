import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_FOLDER_CATEGORY_API = '/api/users/1/folders';

const getFolderCategory = async () => {
  return fetchWithGet(GET_FOLDER_CATEGORY_API);
};

export { getFolderCategory };
