import { useEffect, useState } from "react";
import { getUser } from "../api";

export default function useGetUserAsync() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await getUser();
      const { image_source, email } = data[0];
      setData([image_source, email]);
    })();
  }, []);

  return data;
}
