import styled from "styled-components";
import getData from "../api/getData";
import { useEffect, useState } from "react";

const Sorts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.4rem;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const Sort = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;

  &:hover {
    color: #fff;
    background-color: #6d6afe;
  }
`;

const SortingBar = function () {
  const [folderName, setFolderName] = useState([]);

  useEffect(() => {
    const Data = async () => {
      const result = await getData("/users/1/folders");
      setFolderName(result.data);
    };

    Data();
  }, []);

  return (
    <Sorts>
      <Sort>전체</Sort>
      {folderName.map((item) => {
        return <Sort key={item.id}>{item.name}</Sort>;
      })}
    </Sorts>
  );
};

export default SortingBar;
