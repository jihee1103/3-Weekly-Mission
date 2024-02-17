'use client';

import styled from 'styled-components';
import CardList from '../../components/card/CardList';
import SearchBar from '../../components/search-bar/SearchBar';
import SearchResult from '../../components/search-bar/SearchResult';
import { Links } from '../../folder/page';

interface Props {
  links: Links[];
  searchInputValue: string;
  updateSearchInputValue: (value: string) => void;
}

export default function SharedBodyContents({
  links,
  searchInputValue,
  updateSearchInputValue,
}: Props) {
  return (
    <ContentsBox>
      <SearchBar
        searchInputValue={searchInputValue}
        updateSearchInputValue={updateSearchInputValue}
      />
      {searchInputValue ? (
        <SearchResult searchInputValue={searchInputValue} />
      ) : null}
      <CardList links={links} searchInputValue={searchInputValue} />
    </ContentsBox>
  );
}

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
