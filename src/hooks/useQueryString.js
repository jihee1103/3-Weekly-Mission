import { useSearchParams } from 'react-router-dom';

export const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   *
   * @param {*} key
   * @param {number | string} value
   */
  const generateNewSearchParams = (key, value) => {
    setSearchParams((prev) => {
      if (value == null) {
        prev.delete(key);
      } else {
        prev.set(key, String(value));
      }

      return prev;
    });
  };

  return { searchParams, setSearchParams, generateNewSearchParams };
};
