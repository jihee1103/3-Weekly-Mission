import { useEffect, useState } from "react";
import { getUserData } from "../apis/api";

export function useUserData() {
  const [userData, setUserData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //유저 데이터 가져오기
    const handleLoadUser = async () => {
      let user;
      try {
        user = await getUserData();
        setLoadingError(null);
      } catch (e) {
        setLoadingError(e);
        return;
      } finally {
      }
      setUserData(user);
    };

    handleLoadUser();
  }, []);

  return { userData, loadingError };
}
