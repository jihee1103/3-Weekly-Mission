import { useEffect, useState } from 'react';
import { getFolderSample } from '../../api';
import CardList from '../card-list/index';

function SharedCardList() {
  const [link, setLink] = useState();

  useEffect(() => {
    const folderSampleData = async () => {
      const data = await getFolderSample();
      setLink(data);
    };

    folderSampleData();
    return;
  }, []);

  return <CardList link={link} />;
}

export default SharedCardList;
