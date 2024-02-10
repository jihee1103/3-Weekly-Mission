import { useEffect, useState } from "react";
import { UserLink, getUserLinks } from "../../api";
import styled from "styled-components";
import { FolderContentCardProps } from "../../types";
import Card from "./Card";

export default function FolderContentCard({
  selectedFolder,
}: FolderContentCardProps) {
  const [items, setItems] = useState<UserLink[]>();
  useEffect(() => {
    async function handleload() {
      const { id } = selectedFolder;
      setItems(await getUserLinks(1, id));
    }
    handleload();
  }, [selectedFolder]);
  return (
    <>
      <Cards>
        {items && items.length > 0 ? (
          items?.map((item) => {
            return <Card item={item} key={item.id} />;
          })
        ) : (
          <div className="no-save-link">
            저장된 링크가 없습니다
            <img src="/imgs/03_땡깡-1.gif" alt="폴더에 링크를 추가해주세요" />
          </div>
        )}
      </Cards>
    </>
  );
}

const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
