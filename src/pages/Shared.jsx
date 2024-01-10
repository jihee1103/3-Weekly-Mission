import { useState, useEffect } from 'react';

import Hero from '../components/Hero/Hero';
import ShareDescription from '../components/Hero/ShareDescription/ShareDescription';
import CardList from '../components/CardList/CardList';
import Search from '../components/CardList/Search/Search';
import Card from '../components/CardList/Card/Card';

import getFetch from '../utils/getFetch';
import getFormattedCardData from '../utils/getFormattedCardData';

const Shared = () => {
  const [linkData, setLinkData] = useState([]);
  const [heroLinkData, setHeroLinkData] = useState({});

  // shared의 Hero 컴포넌트 데이터
  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/sample/folder')
        .then((data) => {
          return data;
        })
        .then((data) => {
          // sample 데이터의 link부분의 key를 카멜 케이스에서 스네이크 케이스로 변환
          const formattedData = getFormattedCardData(data);
          setLinkData(() => formattedData.folder.links);
          setHeroLinkData(() => data.folder);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Hero>
        <ShareDescription heroLinkData={heroLinkData} />
      </Hero>
      <CardList>
        <Search />
        <Card cardData={linkData} />
      </CardList>
    </>
  );
};

export default Shared;
