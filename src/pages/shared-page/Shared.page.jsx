import { useEffect, useState } from 'react';
import HeaderAndFooter from '../../shared/layout/header&footer/HeaderAndFooter';
import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import { getUserFolders } from '../../api/getUserFolders';
import './Shared.css';

const useGetUserFolders = () => {
  const [links, setLinks] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getUserFolders();
      if (data) {
        const { folder } = data;
        const { links, ...rest } = folder;
        setLinks(links);
        setUserInfo(rest);
      }
    })();
  }, []);
  return { links, userInfo };
};

const Shared = () => {
  const { links, userInfo } = useGetUserFolders();
  return (
    <HeaderAndFooter>
      <Banner userInfo={userInfo} />
      <Article links={links} />
    </HeaderAndFooter>
  );
};
export default Shared;
