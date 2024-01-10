import { useCallback, useEffect, useState } from 'react';
import { getSampleProfileData } from '@api/shared-page/getSampleProfileData';

const useGetProfileData = () => {
  const [profileData, setProfileData] = useState(null);

  const fetchAndSetProfileData = useCallback(async () => {
    const data = await getSampleProfileData();
    setProfileData(data);
  }, []);

  useEffect(() => {
    fetchAndSetProfileData();
  }, [fetchAndSetProfileData]);

  return profileData;
};

export { useGetProfileData };
