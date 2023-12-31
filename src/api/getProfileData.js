const BASE_URL = 'https://bootcamp-api.codeit.kr';
const GET_PROFILE_DATA_API = '/api/sample/user';

const getProFileDataApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}${GET_PROFILE_DATA_API}`);
    if (response.ok) {
      const data = await response.json();
      console.dir(data);
      return data;
    } else {
      throw new Error('no profile data');
    }
  } catch (error) {
    console.log('🚀 ~ file: getProfileData.js:11 ~ getProFileData ~ error:', error);
  }
};

export { getProFileDataApi };
