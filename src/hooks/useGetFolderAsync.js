import { useEffect, useState } from "react";
import { getFolder } from "../api";

export default function useGetFolderAsync() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
        const {folder} = await getFolder();
        setData(folder);
    })();
  }, []);

  return data;
}
