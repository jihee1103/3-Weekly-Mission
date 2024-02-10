import { useState } from "react";
import useEffectOnce from "./useEffectOnce";
import camelcaseKeys from "camelcase-keys";
import { ApiFunc } from "../types/functionType";

export default function useFetchData(apiFunction: ApiFunc) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

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
      const camelData = camelcaseKeys(data, { deep: true });
      setData(camelData);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffectOnce(fetchData);

  return { data, error, isLoading, fetchData, setData };
}
