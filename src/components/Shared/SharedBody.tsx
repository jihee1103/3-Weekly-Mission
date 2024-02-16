import { useEffect, useState } from 'react';
import { BASE_API_HOST } from '../../../app/constants/api';
import getFetchRequest from '../../../utils/getFetchRequest';
import Loading from '../Loading/Loading';
import SharedBodyContents from './SharedBodyContents';
import Error from '../Error/Error';
import getErrorMessage from '../../../utils/getErrorMessage';

export default function SharedBody() {
  const API_FOLDER = 'sample/folder';
  const [links, setLink] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const updateSearchInputValue = (value: string) => {
    setSearchInputValue(value);
  };

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');
    const getLinks = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setLink(result.folder.links);
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        setErrorMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    getLinks();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }
  return (
    <SharedBodyContents
      links={links}
      searchInputValue={searchInputValue}
      updateSearchInputValue={updateSearchInputValue}
    />
  );
}
