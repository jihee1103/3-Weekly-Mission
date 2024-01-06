import { useEffect, useState } from "react";

export default function useFetchData(apiFunction) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const result = await apiFunction();
      if (!result) throw new Error("없습니다!");
      const { data } = result;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, setData];
}
