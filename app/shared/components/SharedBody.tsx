'use client';

import { useEffect, useState } from 'react';
import { BASE_API_HOST } from '../../../constants/api';
import getFetchRequest from '../../../utils/getFetchRequest';
import SharedBodyContents from './SharedBodyContents';

export default function SharedBody() {
  const API_FOLDER = 'sample/folder';
  const [links, setLink] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const updateSearchInputValue = (value: string) => {
    setSearchInputValue(value);
  };

  useEffect(() => {
    const getLinks = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setLink(result.folder.links);
      } catch (error) {
        console.log(error);
      }
    };
    getLinks();
  }, []);

  return (
    <SharedBodyContents
      links={links}
      searchInputValue={searchInputValue}
      updateSearchInputValue={updateSearchInputValue}
    />
  );
}
