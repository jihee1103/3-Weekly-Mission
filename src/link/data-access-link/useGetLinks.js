import { useCallback, useEffect } from "react";
import { axiosInstance } from "../../util/axiosInstance";
import { useAsync } from "../../util/useAsync";
import { mapLinksData } from "../util-map/mapLinksData";
import { ALL_LINKS_ID } from "./constant";

export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDateFormat = ({ id, created_at, url, image_source, title, description }) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDateFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
