import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_PROFILE_DATA_API = '/api/users/1';

const getProfileData = async () => {
  return fetchWithGet(GET_PROFILE_DATA_API);
};

export { getProfileData };
