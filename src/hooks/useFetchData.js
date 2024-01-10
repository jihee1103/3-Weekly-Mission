import { useState } from "react";
import convertKeysToCamelCase from "../utils/camelCaseUtil";
import useEffectOnce from "./useEffectOnce";

export default function useFetchData(apiFunction) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (apiFunc = apiFunction) => {
    if (isLoading) return;
    setData(null);
    setError(null);
    setIsLoading(true);
    try {
      const result = await apiFunc();
      if (!result) {
        throw new Error("없습니다!");
      }
      const { data } = result;
      if (data.length < 1) {
        setData(null);
        return;
      }
      const camelData = convertKeysToCamelCase(data);
      setData(camelData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffectOnce(fetchData);

  return { data, error, isLoading, fetchData };
}
