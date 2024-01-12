/**
 *
 * @param {string} BASE_URL
 * @param {string} endPoint
 * @param {ConstructorParameters<typeof URLSearchParams>[number]} qs
 * @returns
 */
const getUrlWithQs = (BASE_URL, endPoint, qs) => {
  const url = new URL(`${BASE_URL}${endPoint}`);
  const searchParams = new URLSearchParams(qs);
  url.search = searchParams;

  return url;
};

export { getUrlWithQs };
