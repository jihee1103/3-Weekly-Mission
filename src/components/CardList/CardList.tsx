import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "../../apis/api";
import Card from "./Card/Card";
import { ALL_LINKS_ID } from "../Folder/constants";
import styles from "./CardList.module.css";
import OptionBox from "./OptionBox";
import { useRecoilState } from "recoil";
import { resetAtom, searchKeyword } from "../Content/Content";

interface Props {
  folderData: string[];
  selectedFolderId: number | string;
  selectedFolderName: string;
}
function CardList({ folderData, selectedFolderId, selectedFolderName }: Props) {
  const [cardList, setCardList] = useState<any[]>([]);
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);
  const [isReset, setIsReset] = useRecoilState<boolean>(resetAtom);

  useEffect(() => {
    const handleLoadCardList = async () => {
      // console.log("selectedFolderId", selectedFolderId);
      const { data } = await getLinkDataByFolderId(selectedFolderId);

      setCardList(data);
    };

    handleLoadCardList();
  }, [selectedFolderId, isReset]);

  useEffect(() => {
    const searchedCardList = cardList.filter((card) => {
      return (
        card?.url?.toLowerCase().includes(keyword) ||
        card?.description?.toLowerCase().includes(keyword) ||
        card?.title?.toLowerCase().includes(keyword)
      );
    });
    // console.log("검색결과", searchedCardList);
    setCardList(searchedCardList);
  }, [keyword]);

  return (
    <>
      <div className={styles.optionBar}>
        <span>{selectedFolderName}</span>
        {selectedFolderId === ALL_LINKS_ID || (
          <OptionBox selectedFolderName={selectedFolderName} />
        )}
      </div>
      <div className={styles.cardList}>
        {cardList.map((link) => (
          <Card key={link.id} link={link} folderData={folderData}></Card>
        ))}
      </div>
    </>
  );
}
export default CardList;
