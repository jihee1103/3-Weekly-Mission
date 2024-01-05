import { useCallback, useEffect, useState } from "react";

export default function useGetFolderAsync(asyncFunction) {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    (async () => {
        const {folder} = await asyncFunction();
        setFolder(folder);
    })();
  }, []);

  return folder;
}
