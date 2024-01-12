import { getUrlWithQs } from '@api/util/getUrl';

import { BASE_URL } from './instance-api';

/**
 * @param {string} endPoint
 * @param {ConstructorParameters<typeof URLSearchParams>[number]} qs
 * @returns
 */
const fetchWithGet = async (endPoint, qs) => {
  try {
    const url = getUrlWithQs(BASE_URL, endPoint, qs);

    const response = await fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('🚀 ~ fetchWithGet ~ error:', error);
  }
};

export { fetchWithGet };
