import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_SAMPLE_PROFILE_DATA_API = '/api/sample/user';
// {
//   "id": 1,
//   "name": "코드잇",
//   "email": "codeit@codeit.com",
//   "profileImageSource": "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png"
// }

export interface ISampleProfileDataResponse {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

const getSampleProfileData = async () => {
  return fetchWithGet<ISampleProfileDataResponse>(GET_SAMPLE_PROFILE_DATA_API);
};

export { getSampleProfileData };
