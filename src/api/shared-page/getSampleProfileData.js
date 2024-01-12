import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_SAMPLE_PROFILE_DATA_API = '/api/sample/user';

const getSampleProfileData = async () => {
  return fetchWithGet(GET_SAMPLE_PROFILE_DATA_API);
};

export { getSampleProfileData };
