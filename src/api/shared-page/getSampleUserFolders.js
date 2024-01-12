import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_SAMPLE_USER_FOLDERS_API = '/api/sample/folder';

const getSampleUserFolders = async () => {
  return fetchWithGet(GET_SAMPLE_USER_FOLDERS_API);
};

export { getSampleUserFolders };
