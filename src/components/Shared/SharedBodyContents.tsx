import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import CardList from '../Card/CardList';
import { Links } from '../Folder/Folder';

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
