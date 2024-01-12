import { useEffect, useState } from "react";
import { getUserFolder } from "../api";

export default function useGetUserFolderAsync() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
        const {data} = await getUserFolder();
        setData(data);
    })();
  }, []);

  return data;
}
