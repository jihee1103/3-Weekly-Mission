import styled from 'styled-components';
import Card from './Card';
import { Links } from '../Folder/Folder';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

interface Props {
  links: Links[];
  toggleModal?: () => void;
  updateModalName?: (name: string) => void;
  handleClickDeleteLink?: (url: string) => void;
  searchInputValue: string;
}

export default function CardList({
  links,
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
  searchInputValue,
}: Props) {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const handleSearchValueDebounced = debounce(() => {
      setDebouncedValue(searchInputValue);
    }, 300);

    handleSearchValueDebounced();

    return () => {
      handleSearchValueDebounced.cancel();
    };
  }, [searchInputValue]);

  const filterSearchResult = () => {
    if (debouncedValue === '') {
      return links.map((link) => (
        <Card
          key={link.id}
          link={link}
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          handleClickDeleteLink={handleClickDeleteLink}
        />
      ));
    }

    const filteredLinks = links.filter((link) => {
      const linkValues = [link.url, link.title, link.description].filter(
        (value) => value !== null
      );
      return linkValues.some((value) => value.includes(debouncedValue));
    });

    return filteredLinks.map((link) => (
      <Card
        key={link.id}
        link={link}
        toggleModal={toggleModal}
        updateModalName={updateModalName}
        handleClickDeleteLink={handleClickDeleteLink}
      />
    ));
  };

  return <CardBox>{filterSearchResult()}</CardBox>;
}

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 20px;

  @media (max-width: 1199px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px 24px;
    }
  }
  @media (max-width: 767px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;
