import { useEffect, useState } from "react";

export default function useGetUserAsync(asyncFunction) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await asyncFunction();
      const { profileImageSource, email } = data;
      setData([profileImageSource, email]);
      console.log('1');
    })();
  }, [asyncFunction]);

  return data;
}
