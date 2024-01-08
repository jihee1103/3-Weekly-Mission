import { useCallback, useEffect, useState } from 'react';
import { getProfileData } from '@api/folder-page/getProfileData';

// {
//   "data": [
//     {
//       "id": 1,
//       "created_at": "2023-06-04T13:03:01+00:00",
//       "name": "코드잇",
//       "image_source": "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
//       "email": "codeit@codeit.com",
//       "auth_id": "b9d4649a-8d92-4776-8f69-80abe2786721"
//     }
//   ]
// }

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState(null);

  const fetchAndSetProfileData = useCallback(async () => {
    const { data } = await getProfileData();
    console.log(data);
    setProfileData(data[0]);
  }, []);

  useEffect(() => {
    fetchAndSetProfileData();
  }, [fetchAndSetProfileData]);
  return profileData;
};

export { useGetProfileData };
