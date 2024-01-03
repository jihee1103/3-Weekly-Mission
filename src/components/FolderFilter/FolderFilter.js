import styled from "styled-components";
import "./FolderFilter.css";

function FolderFilter() {
  const Button = styled.button`
    display: flex;
    padding: 0.8rem 1.2rem;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: #fff;

    color: #000;
    font-size: 1.6rem;

    &:hover,
    &:focus {
      background: var(--Linkbrary-primary-color, #6d6afe);
      color: #fff;
    }
  `;

  return (
    <div className="buttons">
      <Button>전체</Button>
      <Button>⭐️ 즐겨찾기</Button>
      <Button>코딩 팁</Button>
      <Button>채용 사이트</Button>
      <Button>유용한 글</Button>
      <Button>나만의 장소</Button>
    </div>
  );
}

export default FolderFilter;
