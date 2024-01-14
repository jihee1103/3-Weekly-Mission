import styled from "styled-components";

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
  height: 3.5rem;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;

  &:hover {
    color: #fff;
    background-color: #6d6afe;
  }
`;

const SortingBar = function ({ handleSort, folderName }) {
  return (
    <Sorts>
      <Sort folderName={folderName} onClick={() => handleSort("all")}>
        전체
      </Sort>
      {folderName.map((item) => {
        return (
          <Sort key={item.id} onClick={() => handleSort(item.id)}>
            {item.name}
          </Sort>
        );
      })}
    </Sorts>
  );
};

export default SortingBar;
