import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FolderList from './FolderList';
import AddFolder from './AddFolder';
import getFetchRequest from '../../utils/getFetchRequest';
import { API_USER, BASE_API_HOST } from '../../constants/api';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  @media (max-width: 1199px) {
    & {
      width: 704px;
    }
  }
  @media (max-width: 767px) {
    & {
      width: 325px;
      margin-top: 8px;
    }
  }
`;
const FolderListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px 12px;
  flex-wrap: wrap;
`;
const FolderItemAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  cursor: pointer;
`;
const AddFolderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FolderListArea() {
  const [folderLists, setFolderList] = useState([]);

  useEffect(() => {
    const getFolderList = async () => {
      try {
        const result = await getFetchRequest(
          BASE_API_HOST,
          `${API_USER}/folders`,
        );
        setFolderList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFolderList();
  }, []);

  return (
    <Wrapper>
      <FolderListContainer>
        <FolderItemAll>전체</FolderItemAll>
        {folderLists.map((item) => (
          <FolderList key={item.id} item={item} />
        ))}
      </FolderListContainer>
      <AddFolderWrapper>
        <AddFolder />
      </AddFolderWrapper>
    </Wrapper>
  );
}
