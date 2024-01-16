import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_FOLDER_LINKS_DATA_API = '/api/users/1/links';

const getSortedFolderLinksData = async (folderId) => {
  return fetchWithGet(GET_FOLDER_LINKS_DATA_API, folderId && `folderId=${folderId}`);
};

export { getSortedFolderLinksData };
