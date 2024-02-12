import * as S from './style';

export const Search = () => {
  return (
    <S.SearchForm className="form search__form">
      <S.SearchIcon width="16" src="/images/search.svg" alt="검색 아이콘" />
      <label htmlFor="input-search" />
      <S.SearchInput
        id="input-search"
        placeholder="링크를 검색해 보세요"
        name="searchData"
      />
    </S.SearchForm>
  );
};
