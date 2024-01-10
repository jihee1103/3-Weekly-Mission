import { useEffect, useState } from 'react';
import { BASE_API_HOST } from '../../constants/api';
import getFetchRequest from '../../utils/getFetchRequest';
import Loading from '../Loading/Loading';
import SharedBodyContents from './SharedBodyContents';
import Error from '../Error/Error';

export default function SharedBody() {
  const API_FOLDER = 'sample/folder';
  const [links, setLink] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    setErrorMessage('');
    const getLinks = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setLink(result.folder.links);
      } catch (e) {
        setErrorMessage(e.message);
      } finally {
        setIsloading(false);
      }
    };
    getLinks();
  }, []);

  if (isloading) {
    return <Loading />;
  }
  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }
  return <SharedBodyContents links={links} />;
}
