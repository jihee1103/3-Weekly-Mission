import styled from 'styled-components';

interface Props {
  searchInputValue: string;
}

export default function SearchResult({ searchInputValue }: Props) {
  return (
    <Wrapper>
      <SearchText>{searchInputValue}</SearchText>
      <Text>으로 검색한 결과입니다.</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  margin-top: 16px;
`;
const Text = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;
const SearchText = styled(Text)`
  color: var(--Linkbrary-gray100, #373740);
`;
