export default async function getFetchRequest(
  host: string,
  path: string,
  headers = {}
) {
  const url = `https://${host}/${path}`;

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new Error(data);
}
