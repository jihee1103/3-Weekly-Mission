import { useCallback, useEffect, useState } from 'react';
import { getProFileData } from '../../../../../../api/getProfileData';

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState(null);

  const fetchAndSetProfileData = useCallback(async () => {
    const data = await getProFileData();
    setProfileData(data);
  }, []);

  useEffect(() => {
    fetchAndSetProfileData();
  }, [fetchAndSetProfileData]);
  return profileData;
};

export { useGetProfileData };
