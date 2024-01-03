export default async function getFetchRequest(host, path, body, headers = {}) {
  const url = `https://${host}/${path}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}
