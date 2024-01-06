import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FolderContent from './FolderContent';
import getFetchRequest from '../../utils/getFetchRequest';
import BASE_API_HOST from '../../constants/api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export default function FolderBody() {
  const API_USER = 'api/users/1';
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getUserLinks = async () => {
      const result = await getFetchRequest(BASE_API_HOST, `${API_USER}/links`);
      setLinks(result.data);
    };
    getUserLinks();
  }, []);

  return (
    <Wrapper>
      <SearchBar />
      <FolderContent links={links} />
    </Wrapper>
  );
}
