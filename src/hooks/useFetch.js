import { useCallback, useState } from "react";

function useFetch(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappendFunction = useCallback(
    async (...args) => {
      try {
        setError(null);
        setPending(true);
        return await asyncFunction(...args);
      } catch {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );
  return [pending, error, wrappendFunction];
}

export default useFetch();
