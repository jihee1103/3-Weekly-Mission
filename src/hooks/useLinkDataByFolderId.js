import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "../apis/api";

export function useLinkDataByFolderId(folderId) {
  const [linkData, setLinkData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getLinkDataByFolderId(folderId);
        setLinkData(data);
        setLoadingError(null);
      } catch (e) {
        setLoadingError(e);
        return;
      } finally {
      }

      console.log(linkData);
    };

    handleLoadFolder();
  }, []);

  return { linkData, loadingError };
}
