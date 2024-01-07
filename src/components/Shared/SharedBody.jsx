import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import getFetchRequest from '../../utils/getFetchRequest';
import { BASE_API_HOST } from '../../constants/api';
import CardList from '../Card/CardList';

const SharedBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 40px;
  @media (max-width: 1199px) {
    & {
      padding: 40px 32px;
    }
  }
  @media (max-width: 767px) {
    & {
      padding: 20px 32px;
    }
  }
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 767px) {
    & {
      gap: 32px;
    }
  }
`;

export default function SharedBody() {
  const API_FOLDER = 'sample/folder';
  const [links, setLink] = useState([]);

  const getLinks = async () => {
    try {
      const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
      setLink(result.folder.links);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <SharedBodyContainer>
      <ContentsBox className="contents-box">
        <SearchBar />
        <CardList links={links} />
      </ContentsBox>
    </SharedBodyContainer>
  );
}
