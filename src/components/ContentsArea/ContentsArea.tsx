import SearchArea from "../SearchArea/SearchArea";
import CardContainer from "../CardContainer/CardContainer";
import styles from "./ContentsArea.module.css";
import FolderListArea from "../FolderListArea/FolderListArea";
import { useEffect, useState } from "react";
import { SharedProvider } from "../../context/FolderNameContext";
import { getAllCardData, getCardDataById, getFolderData } from "../../api/api";
import EmptyArea from "../EmptyArea/EmptyArea";
import SearchText from "../SearchText/SearchText";
import { useRouter } from "next/router";

interface Card {
  id: string;
  createdAt: string;
  description: string;
  url: string;
}

interface FolderData {
  data: Card[];
}

interface SharedFolderData {
  folder: {
    links: Card[];
  };
}

export type CardContainerProps = {
  cardData: FolderData;
  allCardData: FolderData;
  sharedFolderData: SharedFolderData;
  inputText: string | undefined;
};

const ContentsArea = () => {
  const location = useRouter();

  const [cardData, setCardData] = useState<FolderData>({ data: [] });
  const [allCardData, setAllCardData] = useState<FolderData>({ data: [] });
  const [sharedFolderData, setSharedFolderData] = useState<SharedFolderData>({
    folder: { links: [{ id: "", createdAt: "", description: "", url: "" }] },
  });
  const [inputText, setInputText] = useState<string | undefined>();

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const deleteInput = () => {
    setInputText("");
  };

  const handleFolderClick = async (itemId: string) => {
    const cardData = await getCardDataById(itemId);
    setCardData(cardData);
  };

  const handleAllFolderClick = async () => {
    const allCardData = await getAllCardData();
    setAllCardData(allCardData);
  };

  const getSharedFolderData = async () => {
    const sharedFolderData = await getFolderData();
    setSharedFolderData(sharedFolderData);
  };

  useEffect(() => {
    getSharedFolderData();
  }, []);

  switch (location.pathname) {
    case "/shared":
      return (
        <div className={styles.contentsArea}>
          <SearchArea></SearchArea>
          <CardContainer sharedFolderData={sharedFolderData}></CardContainer>
        </div>
      );
    case "/folder":
      return (
        <div className={styles.contentsArea}>
          <SearchArea
            handleInputText={handleInputText}
            inputText={inputText}
            deleteInput={deleteInput}
          ></SearchArea>
          {inputText && <SearchText inputText={inputText}></SearchText>}

          <SharedProvider>
            <FolderListArea
              onFolderClick={handleFolderClick}
              onAllFolderClick={handleAllFolderClick}
            />
            <CardContainer
              cardData={cardData}
              allCardData={allCardData}
              inputText={inputText}
            />
          </SharedProvider>
        </div>
      );
    default:
      return <EmptyArea></EmptyArea>;
  }
};

export default ContentsArea;
